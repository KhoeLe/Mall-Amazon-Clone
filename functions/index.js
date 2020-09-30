const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')(
    'sk_test_51HQSUlLYbhqcdejBwn6YgturByRv61LccPueYpdKQmMure0RW29R2PktwhnWLiSlHzwZPIeqr5VSmenK3P95J6RL00rfEofr82'
    )
    //API http://localhost:5001/louisle-mall/us-central1/api

    //here app config
    const app = express();
    //Middlewares
    app.use(cors({origin: true}));
    app.use(express.json());
    
    //API Routes
    app.get('/', (request, response ) => response.status(200).send("Hello API routes")
    )
    // app.get('/louisle', (request, response ) => response.status(200).send("Hello API routes Louis le")
    //  TEST API =http://localhost:5001/louisle-mall/us-central1/api/louisle  )

    app.post('/payments/create', async (request, response) => {
        const total = request.query.total;
        
        console.log("Total payment request>>>>>>> ", total)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // submit of the currency
            currency: "USD",
        });

        //ok = created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    })


    // Listen comand
    exports.api = functions.https.onRequest(app)






























// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
