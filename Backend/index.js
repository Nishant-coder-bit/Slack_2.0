const express = require("express")
const JWT = require("jsonwebtoken")

const app = express();
app.use(express.json());

let usersDetails = [];

app.get("/", function(req, res) {
    res.send("Running"); 
})

app.post("/signup", function(req, res) {
    const newUser = req.body;
    const userID = newUser.userName;
    const pass = newUser.Password;

    if(!userID){
        res.status(400).send('USER NAME is required');
    }

    if(!pass){
        res.sendStatus(400).send('Password is required!');
    }

    const userDetail = usersDetails.find(u => u.userName === userID);  

    if(userDetail){
        res.status(409).send('This user already exists, Try Again!');
    }


    const user = {
        userName: newUser.userName,
        Password: newUser.Password
    };


    usersDetails.push(user);
    res.status(200).send('Signed up successfully');

})

app.post('/login', function(req, res){
    const user = req.body;
    const userID = user.userName;
    const pass = user.Password;
    
    if(!userID){
        res.status(400).send('USER NAME is required');
    }

    if(!pass){
        res.status(400).send('Password is required!');
    }

    const userDetail = usersDetails.find(u => u.userName === userID && u.Password === pass);
    if(userDetail){
        return res.status(200).send('login successfull');
    }
    else{
        return res.status(401).send('Incorrect credentials');
    }
})

app.listen(3000, () => {console.log("Running on Port 3000");
});