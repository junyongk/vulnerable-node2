

function check_logged(req, res) {

    if (req.session.logged == undefined || req.session.logged == false)
    {
        res.redirect("/login?returnurl=" + req.url);
    }
}


module.exports = check_logged;


secret: 'ñasddfilhpaf78h78032h780g780fg780asg780dsbovncubuyvqy',
