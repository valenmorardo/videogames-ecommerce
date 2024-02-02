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
import {app, apolloServer} from './app/app';

const startApp =  () => {
	return new Promise<void>((resolve, reject) => {
		try {
			app.listen(app.get('port'), () => {
				apolloServer.start()
				console.log(`Express ready at: http://localhost:${app.get('port')}`);
				console.log(`GraphQL ready at: http://localhost:${app.get('port')}/graphql`);
			});

		} catch (error) {
			console.log('EROR!!');
			reject(error);
		}
		return true;
	});
};
startApp()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// DB functions utils
import { cleanDataInDB, mainTest } from 'src/DBUtils';

const DBUtils = async (): Promise<boolean> => {
	try {
		/* await cleanDataInDB(); */
		/* await mainTest(); */
	} catch (err) {
		console.log('ERROR!!');
		if (typeof err === 'string') {
			throw new Error(err);
		} else {
			console.log(err);
			throw new Error('An unknown error occurred');
		}
	}
	return true;
};
/* DBUtils(); */
