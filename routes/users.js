const express = require('express');
const router = express.Router();
const students = require('../datas/students.json');
var userTemplate = {
  학번 : null,
  학번여부 : false,
  index: null
};
var userDB = {};

router.post('/students', function (req, res) {
  const userRequest = req.body.userRequest;
  const school_number = userRequest.utterance;
  const userId = userRequest.user.id;

  if (!userDB[userId]) {
    userDB[userId] = { ...userTemplate };
  }
  if (!userDB[userId]["학번여부"]) {
    userDB[userId]["학번"] = school_number;
    console.log("CHANGED");
    userDB[userId]["학번여부"] = true;
  }

  for (var i = 0; i < Object.keys(students.First_Grade).length; i++) {
    if (students.First_Grade[i].school_number == school_number) {
      var userName = students.First_Grade[i].name;
      userDB[userId]["index"] = i;
      break;
    }
    else {
      var userName = "해당 학번이 DB에 등록되어 있지 않습니다.";
    }
  }
  
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: school_number + " " + userName,
            description: "학번이 저장되었습니다.",
            thumbnail: {
              imageUrl: "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
            }
          }
        }
      ]
    }
  }
  res.status(200).send(responseBody);
});

router.post('/save', function (req, res) {
  const userRequest = req.body.userRequest;
  const userId = userRequest.user.id;
  if (userDB[userId][["학번여부"]]) {
    var responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: userDB[userId][["학번"]]
            }
          }
        ]
      }
    }
  }
  else {
    var responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "현재 저장되어 있는 학번이 없습니다."
            }
          }
        ]
      }
    }
  }
  res.status(200).send(responseBody);
});

router.post('/timetable_day', function (req, res) {
  const userRequest = req.body.userRequest;
  const userId = userRequest.user.id;
  if (!userDB[userId]["학번여부"]) {
    var responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title: "학번이 입력되지 않았습니다.",
              thumbnail: {
                imageUrl: "https://image.flaticon.com/icons/png/128/4403/4403426.png"
              },
              buttons: [
                {
                  action: "message",
                  label: "학번 입력하기"
                }
              ]
            }
          }
        ]
      }
    }
  }
  else {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var dateString = year + "-" + month + "-" + day;   
    var week = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"); 
    var today = week[date.getDay()];

    switch (today) {
      case "월요일":
        var timetable_day = students.First_Grade[userDB[userId]["index"]].timetables[0].월요일;
        var class1 = "1교시 : " + timetable_day[0]['1교시'];
        var class2 = "2교시 : " + timetable_day[0]['2교시'];
        var class3 = "3교시 : " + timetable_day[0]['3교시'];
        var class4 = "4교시 : " + timetable_day[0]['4교시'];
        var class5 = "5교시 : " + timetable_day[0]['5교시'];
        var class6 = "6교시 : " + timetable_day[0]['6교시'];
        var class7 = "7교시 : " + timetable_day[0]['7교시'];
        break;
      case "화요일":
        var timetable_day = students.First_Grade[userDB[userId]["index"]].timetables[0].화요일;
        var class1 = "1교시 : " + timetable_day[0]['1교시'];
        var class2 = "2교시 : " + timetable_day[0]['2교시'];
        var class3 = "3교시 : " + timetable_day[0]['3교시'];
        var class4 = "4교시 : " + timetable_day[0]['4교시'];
        var class5 = "5교시 : " + timetable_day[0]['5교시'];
        var class6 = "6교시 : " + timetable_day[0]['6교시'];
        var class7 = "7교시 : " + timetable_day[0]['7교시'];
        break;
      case "수요일":
        var timetable_day = students.First_Grade[userDB[userId]["index"]].timetables[0].수요일;
        var class1 = "1교시 : " + timetable_day[0]['1교시'];
        var class2 = "2교시 : " + timetable_day[0]['2교시'];
        var class3 = "3교시 : " + timetable_day[0]['3교시'];
        var class4 = "4교시 : " + timetable_day[0]['4교시'];
        var class5 = "5교시 : " + timetable_day[0]['5교시'];
        var class6 = "6교시 : " + timetable_day[0]['6교시'];
        var class7 = "7교시 : " + timetable_day[0]['7교시'];
        break;
      case "목요일":
        var timetable_day = students.First_Grade[userDB[userId]["index"]].timetables[0].목요일;
        var class1 = "1교시 : " + timetable_day[0]['1교시'];
        var class2 = "2교시 : " + timetable_day[0]['2교시'];
        var class3 = "3교시 : " + timetable_day[0]['3교시'];
        var class4 = "4교시 : " + timetable_day[0]['4교시'];
        var class5 = "5교시 : " + timetable_day[0]['5교시'];
        var class6 = "6교시 : " + timetable_day[0]['6교시'];
        var class7 = "7교시 : " + timetable_day[0]['7교시'];
        break;
      case "금요일":
        var timetable_day = students.First_Grade[userDB[userId]["index"]].timetables[0].금요일;
        var class1 = "1교시 : " + timetable_day[0]['1교시'];
        var class2 = "2교시 : " + timetable_day[0]['2교시'];
        var class3 = "3교시 : " + timetable_day[0]['3교시'];
        var class4 = "4교시 : " + timetable_day[0]['4교시'];
        var class5 = "5교시 : " + timetable_day[0]['5교시'];
        var class6 = "6교시 : " + timetable_day[0]['6교시'];
        var class7 = "7교시 : " + timetable_day[0]['7교시'];
        break;
    }



    var responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text:
              dateString + "\n" +  
              class1 + "\n" + 
              class2 + "\n" + 
              class3 + "\n" + 
              class4 + "\n" + 
              class5 + "\n" + 
              class6 + "\n" + 
              class7
            }
          }
        ]
      }
    }
  }
  res.status(200).send(responseBody);
});

router.post('/info', function (req, res) {

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          listCard: {
            header: {
              title: "고교학점제를 소개합니다"
            },
            items: [
              {
                title: "맞춤형 교육",
                description: "자기주도성 / 흥미 / 다양성 UP",
                imageUrl: "https://image.flaticon.com/icons/png/512/2849/2849192.png",
              },
              {
                title: "'과정' 중심 평가",
                description: "결과가 아닌 과정 중심 평가",
                imageUrl: "https://image.flaticon.com/icons/png/512/2849/2849148.png",
              },
              {
                title: "진로를 향해!",
                description: "자신만의 진로를 찾아",
                imageUrl: "https://image.flaticon.com/icons/png/512/1470/1470894.png",
              }
            ],
            buttons: [
              {
                label: "더 자세한 내용 알아보기",
                action: "webLink",
                webLinkUrl: "https://blog.naver.com/moeblog/222273082545"
              }
            ]
          }
        }
      ]
    }
  }

  res.status(200).send(responseBody);
});

router.post('/subject', function(req, res) {
  const userRequest = req.body.userRequest;
  const subject = userRequest.utterance;
  switch(subject) {
    case "공학일반":
      var subject_image = "https://i.postimg.cc/G3kXZvYv/image.png";
      break;
    case "프로그래밍":
      var subject_image = "https://i.postimg.cc/TYSvCZDt/image.png";
      break;
    case "보건":
      var subject_image = "https://i.postimg.cc/tJMwvxYs/image.png";
      break;
    case "교육학":
      var subject_image = "https://i.postimg.cc/fb5Njkj9/image.png";
      break;
    
  }
  console.log(subject_image);
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: subject_image,
            altText: "과목 설명 이미지입니다."
          }
        }
      ]
    }
  }
  res.status(200).send(responseBody);
});

module.exports = router

