import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email:String,
  phone:Number,
  message:String,
});

//Create model from the schema.
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;