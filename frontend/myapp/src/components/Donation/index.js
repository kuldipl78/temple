import './index.css'
import axios from 'axios'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { FaHandsPraying } from "react-icons/fa6";

import { useState } from 'react'



const Donation = () => {
    const [responseState, setResponseState] = useState([])
    const [condition, setCondition] = useState(false)
    const [amount, setAmount] = useState(50)

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script")

            script.src = src

            script.onload = () =>{
                resolve(true)
            }

            script.onerror =() =>{
                resolve(false)
            }

            document.body.appendChild(script)

        })
    }

    const createRazorpayOrder = (amount) => {
        let data = JSON.stringify({
            amount: amount * 100,
            currency: "INR"
        })

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url : "http://localhost:5000/orders",
            headers: {
                'Content-type': 'application/json'
            },
            data:data
        }
        axios.request(config)
        .then((response)=>{
            console.log(JSON.stringify(response.data))
            handelRazorpayScreen(response.data.amount)
        })
        .catch((e) => {
            console.log(`Error: ${e.message}`)
        })
    }

    const handelRazorpayScreen = async (amount) => {
  // Load Razorpay's checkout script dynamically
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  // If script fails to load, show an alert and stop the flow
  if (!res) {
    alert("Some Error At Razorpay Screen Loading");
    return;
  }

  // Define Razorpay options
  const options = {
    key: "rzp_test_pVDgsHT132PxeO", // Your test key
    amount: amount, // Amount should already be in paise (₹ * 100)
    currency: "INR",
    name: "Madiwaleshwar Temple",
    description: "Donate Shree Madiwaleshwar Mahatma Temple",
    image: "https://res.cloudinary.com/dnjnrvy8w/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1751365898/logo1_edited_edited_edited_edited_zfjdpw.jpg",

    // Handler function gets triggered on successful payment
    handler: function (response) {
      // Save payment ID for later use or verification

      // Immediately fetch payment details from backend using the payment ID
      axios.get(`http://localhost:5000/payment/${response.razorpay_payment_id}`)
        .then((res) => {
          // Set the response state so the success message and payment info is shown immediately
          setResponseState(res.data);
        })
        .catch((e) => {
          console.error("Error fetching payment details after success:", e);
        });
    },

    // Optional pre-filled customer info
    prefill: {
      name: "Shree Madiwaleshwar Mahatma Temple",
      email: "kuldiplohare101@gmail.com",
    },

    // Theme color for Razorpay popup
    theme: {
      color: "#45b5d1ff",
    }
  };

  // Open Razorpay checkout modal
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
    

    return(
        <>
            <Navbar/>
            <div className='main-donation-container'>
                <div className='donation-container'>
                    <div className='amount-container fade-in'>
                        <h1>Make a Donation</h1>
                        <div className='Frequency-container'>
                            <p className='para-freq'>Frequency</p>
                            <div className='freq-btn-cinatainer'>
                                <button className='btn-click'>One Time</button>
                                <button className='btn-click'>Monthly</button>
                            </div>
                            <p className='para-freq'>Amount</p>
                            <div className='freq-btn-cinatainer'>
                                <button onClick={()=> setAmount(50)} className='btn-click'>₹50</button>
                                <button onClick={()=> setAmount(100)} className='btn-click'>₹100</button>
                                <button onClick={()=> setAmount(200)} className='btn-click'>₹200</button>
                                <button onClick={()=> setAmount(400)} className='btn-click'>₹400</button>
                                <button onClick={() => setCondition(true) } className='btn-click'>Other</button>
                            </div>
                            
                            {condition ? <div className='other-amount-container'>
                                <hr/>
                                <label for="amount">₹</label>
                                <input onChange={(e) => setAmount((e.target.value))} type="number" id="amount" min="1" placeholder="Enter amount (₹)"/>

                            </div> :""}
                            <hr/>
                            
                            <div className='payment-button'>
                                <button onClick={()=> {createRazorpayOrder(amount)}} className='btn-payment'>Donate ₹{amount}</button>
                                
                                {responseState.length !== 0 && (
                                        
                                    <div className='thanks-container'>
                                        <FaHandsPraying className='thanks-logo'/>
                                        <h1 className='heding-thanks'>Thanks For Donation</h1>
                                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                            <li style={{color: 'gray', fontWeight: "bold"}}>Amount : {responseState.amount / 100} ₹</li>
                                            <li style={{color: 'gray', fontWeight: "bold"}}>Currency : {responseState.currency}</li>
                                            <li style={{color: 'gray', fontWeight: "bold"}}>Status : {responseState.status}</li>
                                            <li style={{color: 'gray', fontWeight: "bold"}}>Method : {responseState.method}</li>

                                        </ul>
                                    </div>

                                )}
                            </div>
                            
                        </div>
                    </div>
                    <div className='image-donation-container fade-in'>
                        <img className='god-donation-image' alt='god' src='/images/img21.png'/>
                                
                    </div>
                    
                </div>
            </div>
            
            <Footer/>

        </>
    )
}

export default Donation