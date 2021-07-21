const { index } = require('cheerio/lib/api/traversing');
const students = require('../datas/students.json');
var userId = 284292;
var userDB = {};
var favoriteTemplate = {
  학번 : null,
  학번여부 : false,
  index : null
};
const school_number = "20805"; // 입력 발화

if (!userDB[userId]) {
  userDB[userId] = { ...favoriteTemplate };
}

if (!userDB[userId]["학번여부"]) {
  userDB[userId]["학번"] = 20805;
  console.log("CHANGED");
  userDB[userId]["학번여부"] = true;
  userDB[userId]["index"] = 1;
}

var timetable_day = students.First_Grade[userDB[userId]["index"]].timetables[0].월요일;
console.log(timetable_day);
console.log(userDB[userId]["학번여부"]);

console.log(userDB);


