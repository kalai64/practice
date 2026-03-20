import ctr from "../controller/ctr.js";
import express from 'express'

const router = express.Router();

router.get('/getData', ctr.getDetails);
router.post('/addData', ctr.addUser)
router.get('/getbyId/:id', ctr.getbyId)
router.put('/updateData/:id', ctr.updateData)
router.delete('/deleteData/:id', ctr.deleteData)

export default router