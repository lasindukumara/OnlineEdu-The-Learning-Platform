import {app} from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

//create a server
app.listen(process.env.PORT,()=>{
    console.log(`server connected with ${process.env.PORT}`);
    connectDB();
});