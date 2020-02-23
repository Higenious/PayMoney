const express = require('express');
const port =  3000;
const app = express();

const payumoney = require('payumoney-node');
payumsoney.setKeys(MERCHANT_KEY, MERCHANT_SALT, AUTHORIZATION_HEADER);


app.listen(port,()=>{
    console.log(`server started running on ${port}`);
})

