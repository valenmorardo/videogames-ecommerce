import { readFileSync } from 'fs';
import path from 'path';

const Saludo_QType: string = readFileSync(path.join(__dirname, './saludo.type.graphql'), {
	encoding: 'utf-8',
});



export {
	Saludo_QType,
	
};
