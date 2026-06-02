const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party");

function logData(str) {
  console.log(
    "I (logData) must have a definition so you're code won't fail :)",
  );
}
