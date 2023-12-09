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

// START SERVER FUNCTION
import startServer from '@config/server/startServer';

const runApp = async (): Promise<boolean> => {
	try {
		await startServer();
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
runApp();
//!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// DB functions utils
import { cleanDataInDB, mainTest } from '@config/DBUtils';

const DBUtils = async (): Promise<boolean> => {
	try {
		await cleanDataInDB();
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
DBUtils();
