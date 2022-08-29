"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDisselUsageForDistance = void 0;
const functions_1 = require("../utils/functions");
// @desc 		Calculate fuel usage
// @route 	GET /api/calculateDisselUsageForDistance
// @access 	Public
const calculateDisselUsageForDistance = (req, res) => {
    // check if required query params where provided
    if (!req.query.distance || !req.query.yearOfProduction || !req.query.fuelUsagePer100KM) {
        res.status(400);
        throw new Error('Please add all required fields: distance, yearOfProduction, fuelUsagePer100KM');
    }
    // cast query params into numbers
    const distance = parseInt(req.query.distance);
    const yearOfProduction = parseInt(req.query.yearOfProduction);
    const fuelUsagePer100KM = parseInt(req.query.fuelUsagePer100KM);
    // check if any of query params aren't a natural number
    if (!(0, functions_1.isNaturalNumber)(distance) ||
        !(0, functions_1.isNaturalNumber)(yearOfProduction) ||
        !(0, functions_1.isNaturalNumber)(fuelUsagePer100KM)) {
        res.status(400);
        throw new Error('Provided values were invalid');
    }
    // make calculations and round to 2 decimal places
    const fuelConsumption = (fuelUsagePer100KM * (distance / 100)).toFixed(2);
    res.status(200).json({ status: 200, data: { fuelUsage: parseFloat(fuelConsumption) } });
};
exports.calculateDisselUsageForDistance = calculateDisselUsageForDistance;
