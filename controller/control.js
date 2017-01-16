module.exports=function(app)
{
  app.get('/', function(req, res){
    res.render('index', { title: 'ClickTime office' });
  });

  app.get('/homepage',  function(req, res){
    res.render('index', { title: 'ClickTime office' });
  });
}
