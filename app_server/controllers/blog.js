/* GET 'Location info' page */
module.exports.blogList = function(req, res) {
    res.render('blog-list', { title: 'Blog List'});
};

/* GET 'Add review' page */
module.exports.addBlog = function(req, res){
    res.render('add-blog', { title : 'Add Blog'});
};