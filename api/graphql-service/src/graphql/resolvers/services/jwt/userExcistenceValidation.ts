import prisma from "@DB/index";

import httpErrors from "../errors/httpErrors/index.errors";

const userExcistence = (jwtPayloadId) => {

    const userExcistence = await prisma.user.findUnique({
        where: {
            id: payload.userId,
        },
    });

    if (!userExcistence) {
        throw new httpErrors.Unauthorized('No esta autenticado');
    }

    if (userExcistence.id !== userIdExt)
        throw new httpErrors.Unauthorized('No esta autenticado');
}