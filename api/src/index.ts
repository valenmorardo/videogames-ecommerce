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
import app from './app/app';
import apolloServerPublic from './app/apolloServerPublic';
import apolloServerPrivate from './app/apolloServerPrivate';
import apolloServerAdmin from './app/apolloServerAdmin';
import { expressMiddleware } from '@apollo/server/express4';

const startApp = async () => {
	try {
		await apolloServerPublic.start();
		await apolloServerPrivate.start();
		await apolloServerAdmin.start();

		app.use('/graphql-public', expressMiddleware(apolloServerPublic));
		app.use('/graphql-private', expressMiddleware(apolloServerPrivate));
		app.use('/graphql-admin', expressMiddleware(apolloServerAdmin));

		app.listen(app.get('port'));
	} catch (error) {
		console.log(error);
		return {
			error,
			message: 'Error at startApp function.',
		};
	}
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
};

startApp();
