import { IResolverContext } from '@libs/typings/graphql/resolverContext';

const Saludo = (_parent, _args, context: IResolverContext, _info): string => {
	return 'hola';
};

export default Saludo;
