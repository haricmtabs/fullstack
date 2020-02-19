// var express=require("express");
// var app=new express();
// app.all('/',function(req,res){
//     res.send("Hello world");
// });
// app.listen(3000);


// var express=require("express");
// const chalk = require("chalk")

// var app=new express();
// app.get('/',function(req,res){
//     res.send("Hello world");
// });
// app.listen(3000,function(){
//     console.log("Lisoning to 3000")
// });

// var express=require("express");
// const chalk = require("chalk");
// const path = require('path');

// var app=new express();

// app.use(express.static(path.join(__dirname,"/public")));

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"src/views/index.html"));
// });

// app.listen(3000,function(){
//     console.log("Lisoning to "+chalk.green('3000'))
// });






var express=require("express");
const chalk = require("chalk");
const path = require('path');


var nav=[{link:'/books',title:"books"},
        {link:"/author",title:"Author"}  ];

var booksRouter= require('./src/routs/booksrouter.js')(nav);


var app=new express();

app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);



app.set('views','./src/views')
app.set('view engine','ejs');



app.get('/',function(req,res){
    res.render('index',
        {nav,
            title:'Library'
        });
    });

   
    


app.listen(3000,function(){
    console.log("Listening to "+chalk.green('3000'))
});

