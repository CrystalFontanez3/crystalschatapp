const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

http.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

// NEW: ask for a username once, when the page loads
let username = prompt("Enter your name:") || "Anonymous";
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit("chat message", { user: username, text: input.value });
        input.value = "";
    }
});
socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    item.textContent = `${msg.user}: ${msg.text}`;

    // mark your own messages differently
    if (msg.user === username) {
        item.classList.add("own-message");
    }

    messages.appendChild(item);
});
socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server running"));
