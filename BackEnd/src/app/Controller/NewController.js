class NewController {
    index (req,res){
        res.render('news');
    }
    show (req,res){
        res.send('ssss')
    }
}
module.exports = new NewController;