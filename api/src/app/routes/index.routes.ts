import { Router } from 'express';
import errorHandlerRoutes from './errorHandlerRoutes';
import { apolloServers } from '@app/apollo';

const router = Router();


router.get('/', (req, res) => {
	res.send({
		welcome: 'Hello World!',
	});
});

router.use('/graphql-public', apolloServers.expressMiddlewarePublicApolloSv);

router.use('/graphql-private', apolloServers.expressMiddlewarePrivateApolloSv);

router.use('/graphql-admin', apolloServers.expressMiddlewareAdminApolloSv);


//----------------------------------
router.use(errorHandlerRoutes);

export default router;
