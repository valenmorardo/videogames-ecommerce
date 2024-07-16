import prisma from "@DB/index";


const GetAllPublishers = async (_parent, _args, _context, _info) => {
    const AllPublishers = await prisma.publisher.findMany({
        select: {
            id: true,
            name: true,
            games_count: true,
            profilePhoto: true,
        }
    })

    return AllPublishers
}

export default GetAllPublishers