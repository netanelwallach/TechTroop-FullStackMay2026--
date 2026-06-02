const returnTime = function (time) {
  console.log("The current time is: " + time);
};

getTime(returnTime);

function getTime(callback) {
  const time = new Date();
  callback(time);
}
