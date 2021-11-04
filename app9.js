const axios = require('axios');
const  osfile  = require('fs')
async function makeRequest() {

    let config = {
        method : 'post',
        url    : 'https://prometeo-test.segurosatlas.com.mx/Catalogo/catalogo/marcaSupAnexo/?idu=2',
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJGQ0pPTU9QUjIiLCJpZHByb3ZlZWRvciI6MzYwLCJuYmYiOjE2MzU5Mzc3NzYsImFwYXRlcm5vIjoiVGVzdCIsImlzcyI6Im1pY3JvbmF1dCIsIm1vZHVsb3NhcHAiOlsiU2luaWVzdHJvIiwiIFNlZ3VpbWllbnRvIiwiIE1hcGFzIl0sImV4cCI6MTYzNTk3Mzc3NiwiYW1hdGVybm8iOiJUZXN0IiwiaWF0IjoxNjM1OTM3Nzc2LCJub21icmUiOiJGQ0pPTU9QUjIiLCJyb2wiOiJPcGVyYWRvciJ9.NMAhD0lR6AfTn0jUPMnPVEFRA87ohDI_Jt1fo6aFFUc',
            'Content-Type': 'application/json',
            'data': 'Valid'
    }
    let res = await axios(config)
     osfile.writeFile("anexos2.json",JSON.stringify(res.data),"utf8",(err) => {
        if (err) console.log(err)
        })
 }
makeRequest();