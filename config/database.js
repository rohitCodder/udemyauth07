import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "udemyauth07",
    })
    .then((c) => console.log(`Database COnnected on host ${c.connection.host}`))
    .catch((e) => console.log("error"));
};
