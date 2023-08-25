//import express

const express = require('express')

//import cors

const cors = require('cors');

//import dataservices

const dataservices = require('./services/dataServices');

//create an application using express

const app = express();

//use json parser for server responses

app.use(express.json())

//using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

//setup a port number

app.listen(3000,()=>{
    console.log('listening on port:3000');
})

//API calls to get all products

app.get('/all-products',(req,res)=>{
    dataservices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API call to addtowishlist

app.post('/addtowishlist',(req,res)=>{
    dataservices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API calls to get wishlist products

app.get('/getwishlist',(req,res)=>{
    dataservices.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API calls to delete wishlist products

app.delete('/deletewish/://id',(req,res)=>{
    dataservices.deletewish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})