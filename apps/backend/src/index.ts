import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";

import { OTP } from "./routes/sendotp";
import { booking } from "./routes/check";
import { payment } from "./routes/payment";
import { adminbooking } from "./Admin/allbooking";
import { contact } from "./routes/contact";
import { addUser } from "./routes/login";
import { bug } from "./routes/bug";
import { graph } from "./Admin/graph";
import { allusers } from "./Admin/allusers";
import "./routes/corn";
import { generalLimiter } from "./routes/ratelimit";
import { show } from "./routes/show";

dotenv.config();


const app = express();
const port = process.env.PORT || 8080;
app.use(express.json())
app.use(cookieParser());

app.use(cors({
    origin:`${process.env.FRONTEND_URL}`,
    credentials: true,
}))


// app.use("/auth",generalLimiter,OTP)
// app.use("/booking",generalLimiter,booking)
// app.use("/payment",generalLimiter,payment)
// app.use("/show",generalLimiter,show)
// app.use("/adminbooking",adminbooking)
// app.use("/contact",generalLimiter,contact)
// app.use("/add", addUser);
// app.use("/bug",generalLimiter,bug);
// app.use("/allusers",allusers)
// app.use("/graph",graph)

app.use("/backend/auth", generalLimiter, OTP);
app.use("/backend/booking", generalLimiter, booking);
app.use("/backend/payment", generalLimiter, payment);
app.use("/backend/show", generalLimiter, show);
app.use("/backend/adminbooking", adminbooking);
app.use("/backend/contact", generalLimiter, contact);
app.use("/backend/add", addUser);
app.use("/backend/bug", generalLimiter, bug);
app.use("/backend/allusers", allusers);
app.use("/backend/graph", graph);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
