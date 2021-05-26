const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("DVD Rental Server is up!")
});

app.get("/test", async (req,res)=>{
    try {
        const sql = "select * from film";
        const data = await pool.query(sql);
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`DVD Rental Server is running on port ${ PORT }`);
});