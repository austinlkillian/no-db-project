let userInfo = [];

module.exports = {
    addUser: (req, res) => {
        userInfo.push({user: req.body.user,
        pass: req.body.pass})
        res.status(200)
        .send(req.body.user)
    }
}