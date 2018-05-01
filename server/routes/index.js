var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET stu_question page*/
router.get('/stu_question', function(req, res, next) {
  res.render('stu_question', { title: 'stu_question' });
});

/* GET stu_answer page*/
router.get('/stu_answer', function(req, res, next) {
  res.render('stu_answer', { title: 'stu_answer' });
});

// GET eli_school page
router.get('/eli_school', function(req, res, next) {
  res.render('eli_school', { title: 'eli_school' });
});

// GET sch_detail page
router.get('/sch_detail', function(req, res, next) {
  res.render('sch_detail', { title: 'sch_detail' });
});

// GET new_post page
router.get('/new_post', function(req, res, next) {
  res.render('new_post', { title: 'new_post' });
});

// GET login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

// GET regist page
router.get('/regist', function(req, res, next) {
  res.render('regist', { title: 'regist' });
});
module.exports = router;
