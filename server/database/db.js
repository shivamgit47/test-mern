import mongoose from "mongoose";
export const Connection = (username, password) => {
  // const URL = "mongodb://localhost:27017/aug-crud";

  const URL = `mongodb+srv://${username}:${password}@aug-crud.2saqd.mongodb.net/?retryWrites=true&w=majority&appName=aug-crud`;
  try {
    mongoose.connect(URL);
    console.log("Database is connected successfully");
  } catch (error) {
    console.log("Error in database Connection");
  }
};
