const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength(num, string) {
  return num * string.length;
}

function makeRegal(string) {
  return "His Royal Highness, " + string;
}
