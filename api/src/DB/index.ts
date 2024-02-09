import { PrismaClient  } from '@prisma/client';


const prisma: PrismaClient = new PrismaClient({
    errorFormat: 'minimal'
});

export default prisma