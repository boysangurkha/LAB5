var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //check if user query 
  if (req.query.user) {
    res.json(
      {
        "messages": req.query.user,
      }
    )
  } else {
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
  }
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

//post messages
router.post('/', function(req, res, next) {
  res.json(
    {
      "status": "success",
      "message": "POST messages",
      "data": {
        "messages": [
          {
            "user": req.body.user,
            "text": req.body.text,
          }
        ]
      }
    }
  );
});

//put messages by id
router.put('/:id', function(req, res, next) {
  res.json(
    {
      "status": "success",
      "message": "PUT messages by " + req.params.id,
      "data": {
        "messages": [
          {
            "user": req.body.user,
            "text": req.body.text,
          }
        ]
      }
    }
  );
});


//delete messages by id
router.delete('/:id', function(req, res, next) {
  res.json(
    {
      "status": "success",
      "message": "DELETE message of ID name " + req.params.id,
      "data": {
        "messages": [
          {
            "user": req.body.user,
            "text": req.body.text,
          }
        ]
      }
    }
  );
});



module.exports = router;

