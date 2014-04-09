
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.upload=function(req,res){
	console.log(req.files);
	res.send({result:'ok'})
}