import express from 'express'

const app = express()
console.dir(app);
let port = 3000;
app.listen(port , () => {
    console.log(`app listening on port ${port}`);
})

// app.use (( req , res) => {
//     console.log("request recieved");
//     // res.send ({
//     //     name : "ajit",
//     //     age: 22,
//     // });
//     let code = "<h1>Fruits</h1><ol><li>apple</li><li>banana</li></ol>";
//     res.send(code);
// })


// app.get('/', (req, res) => {
//   console.log(res.headersSent) // false
//   res.send('OK')
//   console.log(res.headersSent) // true
// })


// app.get("/" , (req , res) =>{
//     res.send("you contacted root path");
//     console.log("root get")
// })
app.get("/help" , (req , res) =>{
    res.send("you contacted help path");
        console.log("help get")

})
app.get("/search" , (req , res) =>{
    res.send("you contacted search path");
        console.log("search get")
})

app.get("/contact" , (req , res) =>{
    res.send("404 error found");
        console.log("error get");

})
