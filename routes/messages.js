var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    {
      "status": "success",
      "message": "GET messages",
      "data": {
        "messages": [
          {
            "user": "John",
            "message": "Hi, I'm Jphn"
          },
          {
            "user": "Jane",
            "message": "Hi, I'm Jane"
          } 
        ]
      }
    }
  );
});

//get messages by id
router.get('/:id', function(req, res, next) {
  res.json(
    {
      "status": "success",
      "message": "GET messages by " + req.params.id,
      "data": {
        "messages": [
          {
            "user": "John",
            "message": "Hi, I'm John"
          }
        ]
      }
    }
  );
});


module.exports = router;

