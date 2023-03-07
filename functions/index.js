const functions = require("firebase-functions");
const express= require('express')
const env=require('dotenv').config()
const cors= require('cors')
const stripe= require('stripe')(process.env.SECRET_KEY)


const app = express();

app.use(cors({origin:true}))

app.use(express.json())


app.get('/',(req,res)=>{    
    res.status(200).send("Hello India!!")
})



app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log("Payment request received for -> " + total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })
    // ok created
    console.log(paymentIntent);
    
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen
exports.api = functions.https.onRequest(app)


