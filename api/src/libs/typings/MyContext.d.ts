import { Request, Response, NextFunction } from "express";

export interface IMyContext {
	req: Request;
	res: Response;
	next: NextFunction;
}