const fs = require("fs");

function readFileWithErrorHandling(filePath, callback) {
  try {
    const data = fs.readFileSync(filePath);

    const fileSize = data.byteLength;
    callback(`File read successfully. Size: ${fileSize} bytes`);
  } catch (err) {
    switch (err.code) {
      case "ENOENT":
        callback(`File not found: ${filePath}`);
        break;
      case "EISDIR":
        callback(`Expected a file, but found a directory: ${filePath}`);
        break;
      case "EACCES":
        callback(`Permission denied to read file: ${filePath}`);
        break;
      default:
        callback(
          `An unexpected error occurred while reading ${filePath}. (${err.message})`,
        );
    }
  }
}

readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
