let userInfo = [];
let id = 0
let myTeam=[];

module.exports = {
    addUser: (req, res) => {
        userInfo.push({user: req.body.user,
        pass: req.body.pass})
        res.status(200)
        .send(req.body.user)
    },

    addMyTeam: (req, res) => {
        myTeam.push(req.body.teammate)
        res.status(200).send(myTeam)
    },

    deleteTeammate: (req,res) => {
        myTeam.splice(req.body.deletedMate, 1)
        res.status(200).send(myTeam)
    }
}

