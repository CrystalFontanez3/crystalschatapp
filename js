const PORT = process.env.PORT || 10000;
server.listen(PORT);
app.use(express.static("public"));
