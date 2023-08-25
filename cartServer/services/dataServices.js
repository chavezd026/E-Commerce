//import db

const { default: mongoose } = require('mongoose');
const db = require('./db');

//get all products details from db

const getProducts=()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"Product not found"
                }
            }
        }
    )
}

const addtowishlist=(id,title,price,image,description)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:404,
                    message:'Product already added to wishlist'
                }
            }
            else{
                const newProduct= new db.Wishlist({
                    id,title,price,image,description
                }) 
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"Product added"
                }
            }
        }
    )
}

//get wishlist from db

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"wishlist is empty"
                }
            }
        }
    )
}

//delete the wishlist product from db

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result,
                    message:"product removed successfully"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"wishlist is empty"
                }
            }
        }
    )

}

module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}