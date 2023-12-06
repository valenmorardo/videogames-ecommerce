
import server from "./serverCfg";

const startServer = () => {
	return new Promise<void>((resolve, reject) => {
		try {
			server.listen(server.get('port'), () => {
				console.log(`Servidor corriendo en el puerto: ${server.get('port')}`);
				resolve();
			});
		} catch (error) {
			console.log('EROR!!');
			reject(error);
		}
		return true;
	});
};

export default startServer;
