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
import myApolloServer from '@app/apollo/apolloServer';

import errorHandler from '@utils/errorHandler';
import { ICustomError } from '@libs/typings/customError';

import handlerData from '@DB/handlerData';

const startApp = async (): Promise<ICustomError | boolean> => {
	try {
		await myApolloServer.start();

		await handlerData();
		app.listen(app.get('port'));

		console.log(`🚀 Express ready at: http://localhost:${app.get('port')}`);
		console.log(
			`✅ GraphQL service ready at: http://localhost:${app.get(
				'port',
			)}/graphql`,
		);

		return true;
	} catch (error) {
		return errorHandler(error);
	}
};

startApp();
