"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const disselController_1 = require("../controllers/disselController");
const unitInjectorController_1 = require("../controllers/unitInjectorController");
const router = express_1.default.Router();
router.route('/calculateDisselUsageForDistance').get(disselController_1.calculateDisselUsageForDistance);
router.route('/probabilityOfUnitInjectorFail').get(unitInjectorController_1.probabilityOfUnitInjectorFail);
module.exports = router;
