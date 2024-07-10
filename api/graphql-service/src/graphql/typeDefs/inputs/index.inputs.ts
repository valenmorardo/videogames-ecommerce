import { read, readFileSync } from 'fs';
import path from 'path';

const NewUser: string = readFileSync(
	path.join(__dirname, './newUser.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const UserLogin: string = readFileSync(
	path.join(__dirname, './userLogin.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const UserId: string = readFileSync(
	path.join(__dirname, './userId.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const PublisherCreate: string = readFileSync(
	path.join(__dirname, './publisherCreate.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const NewGame: string = readFileSync(
	path.join(__dirname, './newGame.graphql'),
	{
		encoding: 'utf-8',
	},
);

const addToWishlist: string = readFileSync(
	path.join(__dirname, './addToWishlist.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const RemoveGameFromWishlist: string = readFileSync(
	path.join(__dirname, './removeGameFromWishlist.input.graphql'),
	{
		encoding: 'utf-8'
	}
)

const Inputs = {
	NewUser,
	UserLogin,
	UserId,
	PublisherCreate,
	NewGame,
	addToWishlist,
	RemoveGameFromWishlist
};

export default Inputs;
