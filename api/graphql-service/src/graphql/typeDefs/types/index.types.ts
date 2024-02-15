import { readFileSync } from 'fs';
import path from 'path';

const User: string = readFileSync(path.join(__dirname, './user.graphql'), {
	encoding: 'utf-8',
});




const Types = {
    User,
}


export default Types