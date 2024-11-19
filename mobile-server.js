var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()
const PORT = process.env.PORT || 4500;

app.use(bodyParser.json())
app.use(express.static('Mobile_system'))
app.use(bodyParser.urlencoded({
    express: true
}))
mongoose.connect('mongodb+srv://barangayrosario7:LrtQxn7toCOslyPV@cluster0.1uk5e.mongodb.net/barangayrosario_database')
var db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Server Successfully Connected to Database"))
 
app.post("/register", async (req, res) => {
    var firstname = req.body.firstname
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password

    var data = {
        "firstname":firstname,
        "username":username,
        "email":email,
        "password":password
    }
    db.collection('mobile_col_data').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        return res.redirect('loginform.html')
    })
    app.get("/",(req,res) => {
        res.set({
            "Allow-access-Allow-Origin":'*'
        })
    });
});
app.listen(4500, () => {
    console.log('Contact form host server is running 4500');
});
