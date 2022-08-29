import express from 'express';
import { calculateDisselUsageForDistance } from '../controllers/disselController';
import { probabilityOfUnitInjectorFail } from '../controllers/unitInjectorController';

const router = express.Router();

router.route('/calculateDisselUsageForDistance').get(calculateDisselUsageForDistance);
router.route('/probabilityOfUnitInjectorFail').get(probabilityOfUnitInjectorFail);

module.exports = router;
