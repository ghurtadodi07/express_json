const axios = require('axios');

async function makeGetRequest() {

    let payload = { username:"FCJOMOPR2", password:"#9Krki" };
    let res = await axios.post('https://prometeo-test.segurosatlas.com.mx/login', payload);

    let data = res.data;
    console.log(data);
}

makeGetRequest();