const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
const router = require("./routes/route");

app.use("/", router);

app.listen(5000, () => console.log("Running at 5000"));
