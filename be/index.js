import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "https://contactapp-lyart.vercel.app", // Allow all origins (change to specific domain for security)
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

main()
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("This is your home page.");
});

app.get("/contacts", async (req, res) => {
  const allContacts = await Contact.find();
  console.log(allContacts);

  res.send(allContacts);
});

app.post("/newcontact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({
      error: "Invalid email format",
    });
  }

  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({
      error: "Invalid phone number",
    });
  }

  if (message && message.trim().length < 10) {
    return res.status(400).json({
      error: "Message too short",
    });
  }

  console.log(formData);

  const newContact = new Contact({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  await newContact.save();

  res.send("Contact saved successfullly!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
