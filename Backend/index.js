const express = require("express")
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
        res.send('USER NAME is required');
    }

    if(!pass){
        res.send('Password is required!');
    }

    for(let i=0; i < usersDetails.length; i++){
        if(usersDetails[i].userName === userID){
            res.send('This User already exists, Try Again!');
        }
    }

    const user = {
    userName: newUser.userName,
    Password: newUser.Password
    };


    usersDetails.push(user);
    res.send('Signed up successfully');

})

app.post('/login', function(req, res){
    const user = req.body;
    const userID = user.userName;
    const pass = user.Password;
    
    if(!userID){
        res.send('USER NAME is required');
    }

    if(!pass){
        res.send('Password is required!');
    }
    

    let flag = false;
    for(let i = 0; i < usersDetails.length; i++){ 
        if(usersDetails[i].userName == userID && usersDetails[i].Password == pass){
            flag = true;
            break;
        }
    }
    if(flag === true){
        return res.send('login successfull');
    }
    else{
        return res.send('Incorrect credentials');
    }
})

app.listen(3001, () => {console.log("Running on Port 3000");
});
