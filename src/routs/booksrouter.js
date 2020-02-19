var express=require("express");
var booksRouter=express.Router();

function router(nav){
var books=[
    {
        title:"Programming in C",
        genre:"Programming",
        author:"Balaguruswami"
    },

    {
        title:"Programming java",
        genre:"Programming",
        author:"Balaguruswami"
    },

    {
        title:"Programming c#",
        genre:"Programming",
        author:"Balaguruswami"
    },

    {
        title:"Programming Visual Studio",
        genre:"Programming",
        author:"Balaguruswami"
    }
];


booksRouter.route('/')
    .get((req,res)=>{
        res.render('books',
        {nav,
         title:'Books',
        books
        });
    })


booksRouter.route('/:id').get((req,res)=>{
    const id=req.params.id;    //const { id } = req.param

    res.render('book',{nav,
                title:'Books',
                book:books[id]
            });
      
})
return booksRouter;
}

module.exports=router;