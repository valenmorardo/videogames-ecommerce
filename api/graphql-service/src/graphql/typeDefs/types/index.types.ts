import {readFileSync } from 'fs';
import path from 'path';

const Admin: string = readFileSync(path.join(__dirname, './admin.graphql'), {
	encoding: 'utf-8',
},);
const Game: string = readFileSync(path.join(__dirname, './game.graphql'), {
	encoding: 'utf-8',
},);
const Genre: string = readFileSync(path.join(__dirname, './genre.graphql'), {
	encoding: 'utf-8',
},);

const Platform: string = readFileSync(
	path.join(__dirname, './platform.graphql'),
	{
		encoding: 'utf-8',
	},
);
const Publisher: string = readFileSync(
	path.join(__dirname, './publisher.graphql'),
	{
		encoding: 'utf-8',
	},
);

const User: string = readFileSync(path.join(__dirname, './user.graphql'), {
	encoding: 'utf-8',
});

const Wishlist: string = readFileSync(
	path.join(__dirname, './wishlist.graphql'),
	{
		encoding: 'utf-8',
	},
);

const LoginResponse: string = readFileSync(
	path.join(__dirname, './loginResponse.graphql'),
	{
		encoding: 'utf-8',
	},
);

const PublisherCreated: string = readFileSync(
	path.join(__dirname, './publisherCreated.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Types = {
	User,
	Publisher,
	Admin,
	Game,
	Genre,
	Platform,
	Wishlist,

	LoginResponse,
	PublisherCreated,
};

export default Types;
