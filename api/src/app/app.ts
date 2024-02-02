import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import env from '@utils/varEnvironments';
import express, { Application } from 'express';
import { Request, Response, NextFunction } from 'express';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
 
const app: Application = express();

app.set('port', env.PORT);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
// cargamos body parser que es un middleware para analizar cuerpos atravez de la url
app.use(bodyParser.urlencoded({ extended: false }));
// activamos el CORS para permitir las peticions AJAX y HTTP desde el front
app.use((_req: Request, res: Response, next: NextFunction) => {
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


app.get('/', (req, res) => {
	res.send({
		welcome: 'Hello World!',
	});
});



// graphql-apollo cfg
import { typeDefs, resolvers } from 'src/graphql';

const apolloServer = new ApolloServer({
typeDefs,
resolvers
})

app.use('/graphql', expressMiddleware(apolloServer))

export {app, apolloServer};
