// index.js
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const Razorpay = require('razorpay')
require('dotenv').config();

const app = express();

app.use(bodyParser.json()); // to parse JSON requests
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());



app.get('/', (req, res) => {
  res.send('Welcome to Node.js backend!');
});

app.post("/orders", async(req, res) =>{

    const razorpay = new Razorpay({
        key_id:"rzp_test_pVDgsHT132PxeO",
        key_secret:"axFnWuaR2YGTCYgbbuCDLhUY"
    })

    const options = {
        amount : req.body.amount,
        currency : req.body.currency,
        receipt : "teceipt#1",
        payment_capture : 1
    }

    try{
        const response = await razorpay.orders.create(options)

        res.json({
            order_id : response.id,
            currency: response.currency,
            amount : response.amount
        })

    }catch(e){
        console.log('Error:', e)
    }

});

app.get("/payment/:paymentId", async(req, res) => {
    const paymentId = req.params.paymentId

    const razorpay = new Razorpay({
        key_id:"rzp_test_pVDgsHT132PxeO",
        key_secret:"axFnWuaR2YGTCYgbbuCDLhUY"
    })

    try{
        const payment = await razorpay.payments.fetch(paymentId)

        if(!payment){
            return res.status(500).json("Error At Razorpay Loding...")
        }

        res.json({
            status : payment.status,
            method : payment.method,
            amount : payment.amount,
            currency : payment.currency
        })

    }catch(e){
        console.log(`Error, ${e}`)
    }


})


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
