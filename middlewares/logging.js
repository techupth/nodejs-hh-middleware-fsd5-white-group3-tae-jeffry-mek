import fs from "fs";

const logging = (req, res, next) => {
  console.log(`IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`);
  const logMessage = `IP: ${req.ip}, Method ${req.method}, Endpoint: ${req.originalUrl}\n`;
  fs.appendFile("data/logs.txt", logMessage, (err) => {
    if (err) {
      console.error("Error writing to logs.txt:", err);
    }
  });

  next();
};

export default logging;
