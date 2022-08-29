import { Request, Response } from 'express';
import { isNaturalNumber } from '../utils/functions';

// @desc 		Calculate fuel usage
// @route 	GET /api/calculateDisselUsageForDistance
// @access 	Public
export const calculateDisselUsageForDistance = (req: Request, res: Response) => {
	// check if required query params where provided
	if (!req.query.distance || !req.query.yearOfProduction || !req.query.fuelUsagePer100KM) {
		res.status(400);
		throw new Error(
			'Please add all required fields: distance, yearOfProduction, fuelUsagePer100KM'
		);
	}

	// cast query params into numbers
	const distance: number = parseInt(req.query.distance as string);
	const yearOfProduction: number = parseInt(req.query.yearOfProduction as string);
	const fuelUsagePer100KM: number = parseInt(req.query.fuelUsagePer100KM as string);

	// check if any of query params aren't a natural number
	if (
		!isNaturalNumber(distance) ||
		!isNaturalNumber(yearOfProduction) ||
		!isNaturalNumber(fuelUsagePer100KM)
	) {
		res.status(400);
		throw new Error('Provided values were invalid');
	}

	// make calculations and round to 2 decimal places
	const fuelConsumption: string = (fuelUsagePer100KM * (distance / 100)).toFixed(2);

	res.status(200).json({ status: 200, data: { fuelUsage: parseFloat(fuelConsumption) } });
};
