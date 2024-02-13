const util = require('./utilController');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:showController');


module.exports.blogList = async function (req, res) {
  try {
    const dbParams = await util.setupDB();
    const blogs = await dbParams.collection.find({}).toArray();
    res.render('blog-list', { title: 'Blog List', blogs });
    dbParams.client.close();
  }
  
  catch (err) {
    debug(err);
  }
}

/* GET 'Add review' page */
module.exports.addBlog = function(req, res){
    res.render('add-blog', { title : 'Add Blog',});
};

module.exports.editBlog = function(req, res){
    res.render('edit-blog', { title : 'Edit Blog',});
};

module.exports.deleteBlog = function(req, res){
    res.render('delete-blog', { title : 'Delete Blog',});
};