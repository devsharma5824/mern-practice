import { createRequire } from "node:module";
import connectDB from "./db/db.js";

const require = createRequire(import.meta.url);
require("dotenv").config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGOdb connection failed : " , err);
});

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${proccess.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("error:", error);
//       throw error;

//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//       });
//     });
//   } catch (error) {
//     console.error("ERROR : " + error);
//     throw err;
//   }
// })();
