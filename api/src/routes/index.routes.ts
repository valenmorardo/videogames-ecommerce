import { Router } from 'express';
import errorHandlerRoutes from './errorHandlerRoutes';
import controllers from '@controllers/index.controllers';

const router = Router();


router.get('/', (req, res) => {
	res.send({
		welcome: 'Hello World!',
	});
});

router.use('/graphql-public', controllers.expressMiddlewarePublicApolloSv);

router.use('/graphql-private', controllers.expressMiddlewarePrivateApolloSv);

router.use('/graphql-admin', controllers.expressMiddlewareAdminApolloSv);


//----------------------------------
router.use(errorHandlerRoutes);

export default router;
