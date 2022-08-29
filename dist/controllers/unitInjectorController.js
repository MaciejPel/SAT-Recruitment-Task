"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.probabilityOfUnitInjectorFail = void 0;
// @desc 		Get probability of engine breakdown
// @route 	GET /api/probabilityOfUnitInjectorFail
// @access 	Public
const probabilityOfUnitInjectorFail = (req, res) => {
    // check if query params where provided
    // make sure client gets what he wants
    if (!req.query.VIN) {
        res.status(400);
        throw new Error('Please add a VIN field');
    }
    // perform heavy calculating task
    const failProbability = Math.floor(Math.random() * 101) / 100;
    res.status(200).json({ status: 200, data: { failProbability: failProbability.toString() } });
};
exports.probabilityOfUnitInjectorFail = probabilityOfUnitInjectorFail;
