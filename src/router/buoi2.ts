import express from 'express'
import { Compare , compareNumber , averageRain , ObjectData , printObject , objectExecrise , interfaceExecrise , classExecrise} from '../controllers/buoi2'
export default (router: express.Router) => {
    router.get('/execrises/compare', Compare)
    router.get('/execrises/compare-number', compareNumber)
    router.get('/execrises/average-rain', averageRain)
    router.get('/execrises/object', ObjectData)
    router.get('/execrises/object-print', printObject)
    router.get('/execrises/object-execrise', objectExecrise)
    router.get('/execrises/interface', interfaceExecrise)
    router.get('/execrises/class', classExecrise)
};