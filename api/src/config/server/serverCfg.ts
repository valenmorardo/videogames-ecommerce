import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import env from '@config/varEnvironments';
import express, { Application } from 'express';
import { Request, Response, NextFunction } from 'express';

const server: Application = express();

server.set('port', env.PORT);

server.use(bodyParser.json());
server.use(express.json());
server.use(cookieParser());
// cargamos body parser que es un middleware para analizar cuerpos atravez de la url
server.use(bodyParser.urlencoded({ extended: false }));
// activamos el CORS para permitir las peticions AJAX y HTTP desde el front
server.use((_req: Request, res: Response, next: NextFunction) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Request-Method, Access-Control-Allow-Request-Method, Access-Control-Request-Headers,  Access-Control-Allow-Origin',
	);
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Request-Headers', '*');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, HEAD, POST, OPTIONS, PUT, DELETE',
	);
	res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

/* import router from '@routes/index.routes';
const allRoutes: express.Router = router;

server.get('/', (req, res) => {
	res.send('Go to /api that is the main route :)');
});
server.use('/api', allRoutes); */

export default server;
