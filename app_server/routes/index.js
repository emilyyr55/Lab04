var express = require('express');
var router = express.Router();
var ctrlBlogs = require('../controllers/blog');
var ctrlOthers = require('../controllers/home');

/* Location pages */
router.get('/', ctrlOthers.home);
router.get('/blog', ctrlBlogs.blogList);
router.get('/blog/add', ctrlBlogs.addBlog);

module.exports = router;
