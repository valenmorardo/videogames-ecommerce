import prisma from "@DB/index";

const GetAllPlatforms = async (_parent, _args, _context, _info) => {
    const AllPlatforms = await prisma.platform.findMany()
    console.log(AllPlatforms)
    return AllPlatforms
}


export default GetAllPlatforms