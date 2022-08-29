import { Request, Response } from 'express';

// @desc 		Get probability of engine breakdown
// @route 	GET /api/probabilityOfUnitInjectorFail
// @access 	Public
export const probabilityOfUnitInjectorFail = (req: Request, res: Response) => {
	// check if query params where provided
	// make sure client gets what he wants
	if (!req.query.VIN) {
		res.status(400);
		throw new Error('Please add a VIN field');
	}

	// perform heavy calculating task
	const failProbability: number = Math.floor(Math.random() * 101) / 100;

	res.status(200).json({ status: 200, data: { failProbability: failProbability.toString() } });
};
