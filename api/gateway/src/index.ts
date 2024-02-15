// 	   /\_/\
//    ( o.o )
// 	   > ^ <
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//		─────▄████▀█▄
//		───▄█████████████████▄
//		─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
//		▄███████▄.▲.▲▲▲▲▲▲▲▲
//		████████████████████▀▀

// START SERVER/APP FUNCTION
import app from '@app/app';

import errorHandler from '@utils/errorHandler';
import { ICustomError } from '@libs/typings/customError';

const startApp = async (): Promise<ICustomError | boolean> => {
	try {

		app.listen(app.get('port'));

		console.log(`🚀 Express ready at: http://localhost:${app.get('port')}`);
	
		return true;
	} catch (error) {
		return errorHandler(error);
	}
};

startApp();
