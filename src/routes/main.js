 const express = require('express')

 const Detail = require ("../models/detail")
 const  slider = require("../models/slider")
 const service = require("../models/services")
 const contact = require("../models/contact")
 const banner = require("../models/banner")
 const routes = express.Router()
 routes.get("/", async (req, res) => {
     const details =  await Detail.findById({"_id":"6524f2b36491175c2689300c"})
     const slides = await slider.find()
     const services= await service.find()
     const banner1 = await banner.find()
     //console.log(slides)
    // console.log(details);
    
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        banner1: banner1,
    }) // Render the "index" view
  
});


routes.get("/gallery",async (req, res) => {
    const details =  await Detail.findById({"_id":"6524f2b36491175c2689300c"})
    res.render("../views/gallery",{
        details:details
    }); // Render the "index" view
});
routes.post("/process-contact-form",async(req,res)=>
{
    console.log("form is submitted")
    console.log(req.body)
    //save data
    try{
 const data = await contact.create(req.body);
 console.log(data);
 res.redirect("/")
    }
    catch(e)
    {
        console.log(e)
        res.redirect("/")
    }
})
module.exports = routes
