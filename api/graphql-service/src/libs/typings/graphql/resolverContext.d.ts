import { Request, Response, NextFunction } from "express";
import { BaseContext } from "@apollo/server";
export interface IResolverContext {
	req: Request;
	res: Response;
	next: NextFunction;
	[prop: string]: any;
}