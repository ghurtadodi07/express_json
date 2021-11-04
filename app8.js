const axios = require('axios');
const  osfile  = require('fs')
async function makeRequest() {

    let config = {
        method : 'get',
        url    : 'https://prometeo-test.segurosatlas.com.mx/Catalogo/obtenerTalleres',
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJGQ0pPTU9QUjIiLCJpZHByb3ZlZWRvciI6MzYwLCJuYmYiOjE2MzU5ODk0MTcsImFwYXRlcm5vIjoiVGVzdCIsImlzcyI6Im1pY3JvbmF1dCIsIm1vZHVsb3NhcHAiOlsiU2luaWVzdHJvIiwiIFNlZ3VpbWllbnRvIiwiIE1hcGFzIl0sImV4cCI6MTYzNjAyNTQxNywiYW1hdGVybm8iOiJUZXN0IiwiaWF0IjoxNjM1OTg5NDE3LCJub21icmUiOiJGQ0pPTU9QUjIiLCJyb2wiOiJPcGVyYWRvciJ9.yDeE1nmCaSZMEma6LnvArrxouG3jA-JKTxYhW5teZlM',
            'Content-Type': 'application/json'
        }
    }
    let res = await axios(config)
     osfile.writeFile("talleres.json",JSON.stringify(res.data),"utf8",(err) => {
        if (err) console.log(err)
        })
 }
makeRequest();