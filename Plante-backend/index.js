const express = require("express");
const cors = require("cors");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const app = express();
app.use(cors());
app.use(express.json());

/******** SERIAL ********/
const port = new SerialPort({
  path: "COM3", // ⚠️ change this
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

let latestData = {
  temp: 0,
  hum: 0,
  soil: 0,
};

/******** READ FROM ARDUINO ********/
parser.on("data", (line) => {
  try {
    // TEMP:28.4,HUM:41,SOIL:52
    const parts = line.split(",");

    let data = {};
    parts.forEach((p) => {
      let [key, value] = p.split(":");
      data[key.trim()] = parseFloat(value);
    });

    latestData = {
      temp: data["TEMP"],
      hum: data["HUM"],
      soil: data["SOIL"],
    };

    console.log("DATA:", latestData);
  } catch (err) {
    console.log("Parse error:", err);
  }
});

/******** API ********/

// PAge de base
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
// GET sensor data
app.get("/api/data", (req, res) => {
  res.json(latestData);
});

// POST pump ON
app.post("/api/pump", (req, res) => {
  port.write("PUMP_ON\n");
  res.json({ status: "Pump command sent" });
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});