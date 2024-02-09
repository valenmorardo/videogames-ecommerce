import { readFileSync } from 'fs';
import path from 'path';

const User: string = readFileSync(path.join(__dirname, './types/user.graphql'), {
	encoding: 'utf-8',
});




const globalTypes = {
    User
}


export default globalTypes