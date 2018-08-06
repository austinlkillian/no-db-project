const express = require('express');
const bodyParser = require('body-parser');

const uc = require("./user-controller");

const app = express();
app.use( bodyParser.json() );

app.post('/api/userInfo', uc.addUser)
app.post('/api/myTeam', uc.addMyTeam)
app.delete('/api/myTeam', uc.deleteTeammate)
app.put('/api/myTeam', uc.updateBattleReady)

const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})