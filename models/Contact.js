import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Menghindari error "OverwriteModelError" di Next.js
export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
