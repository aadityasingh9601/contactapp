import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173", // Allow all origins (change to specific domain for security)
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

app.get("/", (req, res) => {
  res.send("This is your home page.");
});

app.get("/contacts", (req, res) => {
  res.send("This is your create contacts route.");
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
