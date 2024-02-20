import BadRequest from './badRequest';
import Forbidden from './forbidden';
import InternalServerError from './internalServerError';
import MethodNotAllowed from './methodNotAllowed';
import NotFound from './notFound.error';
import NotImplemented from './notImplemented';
import Unauthorized from './unauthorized';


const httpErrors = {
	BadRequest,
	Forbidden,
	InternalServerError,
	MethodNotAllowed,
	NotFound,
	NotImplemented,
	Unauthorized
};

export default httpErrors;
