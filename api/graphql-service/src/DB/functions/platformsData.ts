import { readFileSync } from 'fs';
import path from 'path';

import prisma from '..';

import { IPlatformAttributes } from '@DB/typings/platformAttributes';

const platformsJson: string = readFileSync(
	path.join(__dirname, '../data/platforms.json'),
	{
		encoding: 'utf-8',
	},
);

const platforms = JSON.parse(platformsJson);

const platformsData = async () => {
	try {
		await prisma.platform.deleteMany({});

		platforms.map(async (platform: IPlatformAttributes) => {
			await prisma.platform.create({
				data: {
                    id: platform.id,
					name: platform.name,
				},
			});
		});
	} catch (error) {
		return error;
	}
};


export default platformsData