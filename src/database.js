
  import mongoose from 'mongoose';

  mongoose.connect("mongodb+srv://friduki:Mongo2026@cluster0.8qxuvhc.mongodb.net/apiProducts?appName=API")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

  export default mongoose;
