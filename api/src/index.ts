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
import { expressMiddleware } from '@apollo/server/express4';
import app from './app/app';
import apolloServer from './app/apolloServer';

const startApp = async () => {
	try {
		await apolloServer.start();
		app.use('/graphql', expressMiddleware(apolloServer));
		app.listen(app.get('port'));
	} catch (error) {
		console.log(error);
		return {
			error,
			message: 'Error at startApp function.',
		};
	}
	console.log(`Express ready at: http://localhost:${app.get('port')}`);
	console.log(`GraphQL ready at: http://localhost:${app.get('port')}/graphql`);

	return true;
};

startApp();
