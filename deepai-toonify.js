deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K");

(async function () {
  var resp = await deepai.callStandardApi("toonify", {
    image: document.getElementById("yourFileInputId"),
  });
  console.log(resp);
})();

// Example posting a local image file (Node.js only):
const fs = require("fs");

const deepai = require("deepai"); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K");

(async function () {
  var resp = await deepai.callStandardApi("toonify", {
    image: fs.createReadStream("/path/to/your/file.jpg"),
  });
  console.log(resp);
})();
