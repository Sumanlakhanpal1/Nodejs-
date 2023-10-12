const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/main');
const Detail = require('./models/detail');
const slider = require('./models/slider');
const service = require('./models/services')
const bodyparser = require('body-parser');
const banner = require('./models/banner.js');
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use('', routes);
app.use('/static',express.static("public"))

app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials")


//db connection
async function db(){
try{
    await mongoose.connect("mongodb://localhost:27017/website")
    console.log("Connected To db")
 //banner
//  banner.create([
//     {
//         content:'We work for people ,not for money',
//         description:'paragraph',
//         imageurl:'./static/images/s4.jpg',
//     }
  

//  ])   
//services
// service.create([
//     // {
    //     icon:'fa-solid fa-business-time',
    //     title:'Guidance',
    //     description:'We provide best guidance and best platform in now era. ',
    //     linktext:'/https:www.google.com',
    //     link:'any kink'
    // },
    // {
    //     icon:'fa-solid fa-business-time',
    //     title:'Guidance',
    //     description:'We provide best guidance and best platform in now era. ',
    //     linktext:'/https:www.google.com',
    //     link:'any kink'
    // },
    // {
    //     icon:'fa-solid fa-business-time',
    //     title:'Guidance',
    //     description:'We provide best guidance and best platform in now era. ',
    //     linktext:'/https:www.google.com',
    //     link:'any kink'
    // }

// ])


//slider create
// slider.create([
//     {
// title:'IT DARK',
// subtitle:'ISO CERTIFIED',
// imageurl:'./static/images/s3.jpg',
//     },
//     {
//         title:'IT DARK',
//         subtitle:'ISO CERTIFIED',
//         imageurl:'./static/images/s2.jpg',
//             },
//             {
//                 title:'IT DARK',
//                 subtitle:'ISO CERTIFIED',
//                 imageurl:'./static/images/s1.jpg',
//                     }
// ])




    //navbar create
    // Detail.create({
    //     brandname:"It",
    //     brandIconurl:" path",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"contact us",
    //             url:"/contact us"
    //         }
    //     ]


    // })
    
}catch(err){
    console.log(err)
}
}
db()
app.listen(process.env.PORT || 5556, () => {
    console.log("server started");
});

