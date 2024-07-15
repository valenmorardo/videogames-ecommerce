import prisma from "@DB/index";
import { IResolverContext } from "src/typings/resolverContext";


const GetAllGenres = async (_parent, _args, _context, _info) => {

    const AllGenres = await prisma.genre.findMany()
    return AllGenres
}

export default GetAllGenres