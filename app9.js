

recibeCita = async function (req, res) {
    await sendHttp(req.body,"post","'https://prometeo-test.segurosatlas.com.mx/Catalogo/obtenerTalleres");
    sendResponse(res,await sendHttp(req.body,"post","Catalogo/obtenerTalleres"));
  }

recibeCita ()
