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
  const { formData } = req.body;
  console.log(formData);

  const newContact = new Contact({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  });

  await newContact.save();

  res.send("Contact saved successfullly!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
