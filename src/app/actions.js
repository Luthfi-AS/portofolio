"use server";
// import connectDB from "@/lib/mongodb";
// import Contact from "@/models/Contact";

export async function handleContactForm(prevState, formData) {
  try {
    await connectDB();

    const data = {
      name: formData.get("senderName"),
      email: formData.get("senderEmail"),
      phone: formData.get("senderPhone"),
      message: formData.get("message"),
    };

    // Validasi sederhana
    if (!data.name || !data.email || !data.message) {
      return { error: "Semua kolom wajib diisi!", success: false };
    }

    // Simpan ke MongoDB
    await Contact.create(data);

    return { success: true, error: null };
  } catch (e) {
    console.error(e);
    return { error: "Gagal menyambung ke database", success: false };
  }
}
