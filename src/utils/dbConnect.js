import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successful");
    });

    connection.on("error", (error) => {
      console.log(error);
      process.exit();
    });
    
  } catch (error) {
    console.error(error);
  }
}
