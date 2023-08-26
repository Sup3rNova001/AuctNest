const express = require("express");
require("dotenv").config();
const connectDb = require("./db/dbconnect");
const { createServer } = require("http");
const cors = require("cors");
const socketio = require("./socket");

const path = require("path");
const app = express();
const server = createServer(app);
const io = socketio.init(server);
const adIo = socketio.initAdIo(server, "/socket/adpage");

// Body parser
app.use(express.json());
app.use(cors());
// CORS
const allowedOrigins = ["https://auctnest.onrender.com/", "http://localhost:5000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "./frontend/build")));
// Default route
app.get("/", (req, res, next) => {
  // res.send("Server running");
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));
app.use("/ad", require("./routes/ad"));
app.use("/bid", require("./routes/bid"));
app.use("/room", require("./routes/room"));
app.use("/auction", require("./routes/auction"));
app.use("/upload", require("./routes/uploads"));

// Socket.io setup
const PORT = process.env.PORT || 5000;
io.on("connection", (socket) => {
  // console.log('### Socket IO client connected');
  socket.on("disconnect", (reason) => {
    // console.log('### Socket IO client disconnected');
  });
  socket.on("leaveHome", () => {
    socket.disconnect();
  });
});
adIo.on("connect", (socket) => {
  // socket.join('testroom')
  socket.on("joinAd", ({ ad }) => {
    socket.join(ad.toString());
    // console.log(`User joined room ${ad}`);
  });
  socket.on("leaveAd", ({ ad }) => {
    socket.leave(ad.toString());
    // console.log(`Left room ${ad}`);
  });
  socket.on("disconnect", () => {
    // console.log('User has disconnect from ad');
  });
});
// Connect DB and Initialize server
connectDb();
server.listen(PORT, () => {
  console.log(`#Server running on port ${PORT}`);
});
