import genresData from './functions/genresData';
import platformsData from './functions/platformsData';

const handlerData = async () => {
	await genresData();
	await platformsData();
};

export default handlerData;
