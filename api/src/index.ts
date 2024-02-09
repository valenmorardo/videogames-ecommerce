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
import apolloServerPublic from '@app/apollo/public/apolloServerPublic';
import apolloServerPrivate from '@app/apollo/private/apolloServerPrivate';
import apolloServerAdmin from '@app/apollo/admin/apolloServerAdmin';
import errorHandler from '@utils/errorHandler';
import { ICustomError } from '@libs/typings/customError';


const startApp = async (): Promise<ICustomError|boolean> => {
	try {
		await apolloServerPublic.start();
		await apolloServerPrivate.start();
		await apolloServerAdmin.start();

		app.listen(app.get('port'));

		console.log(`🚀 Express ready at: http://localhost:${app.get('port')}`);
		console.log(
			`✅ GraphQL public service ready at: http://localhost:${app.get(
				'port',
			)}/graphql-public`,
		);
		console.log(
			`🌐 GraphQL private service ready at: http://localhost:${app.get(
				'port',
			)}/graphql-private`,
		);
		console.log(
			`🔒 GraphQL admin service ready at: http://localhost:${app.get(
				'port',
			)}/graphql-admin`,
		);

		return true;

	} catch (error) {
		return errorHandler(error)
	}
};

startApp();
