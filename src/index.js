import {app} from './app.js'
import dotenv from "dotenv"
import connectDB from "./db/db.js";  

dotenv.config({
    path:'./.env',
})

const port = process.env.PORT || 8000

app.get("/", (req, res) =>{
  res.send("hello sir")
})
app.get("/abhijit", (req, res) =>{
  res.send("hello i am  abhijit")
})

connectDB() 
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server is running on port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MONGO db connection failed !!!", err);
  });


//+++++++++++++++++\


// import { app } from "./app.js";
// import dotenv from "dotenv";
// import connectDB from "./db/db.js";

// dotenv.config({
//   path: "./env",
// });

// app.get("/", (req, res) => {
//   res.send("hello abhimanyu")
// })

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running on ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((err) => {
//     console.log("Mongo db connection failed");
//   });


// app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running on ${process.env.PORT || 8000}`);
//     });