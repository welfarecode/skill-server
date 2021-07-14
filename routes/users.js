const express = require('express');
const router = express.Router();

router.post('/sayHello', function(req,res) {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "HELLO I'M RYAN"
                    }
                }
            ]
        }
    }

    res.status(200).send(responseBody);
});

router.post('/showHello', function(req, res) {
    console.log(req.body);
  
    const responseBody = {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleImage: {
              imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
              altText: "hello I'm Ryan"
            }
          }
        ]
      }
    };
  
    res.status(200).send(responseBody);
});
module.exports = router

