const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

const server = app.listen(process.env.PORT || 8000, () => {
	const port = server.address().port;
	console.log(`Express is working on port ${port}`);
});
