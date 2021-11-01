const {Router} = require("express");
const router   = Router();

const direccionamientoController   = require('../controllers/direccionamientoController');

//*************************** ENDPOINTS CLIENTE *********************** */
router.get('/direccionamiento/admin/talleres',direccionamientoController.taller);
router.post('/direccionamiento/siniestro/agencia', direccionamientoController.postAgencia);
