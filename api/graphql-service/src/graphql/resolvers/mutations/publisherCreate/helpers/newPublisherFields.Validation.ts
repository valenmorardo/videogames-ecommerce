
import customGraphQLError from "@graphql/resolvers/services/errors/customGraphQLError"
import { INewPublisher } from "@graphql/resolvers/typings/newPublisher"
import newPublisherFieldsSchema from "./newPublisherFields.Schema"
import httpErrors from "@graphql/resolvers/services/errors/httpErrors/index.errors"

const newPublisherFieldsValidation = (newPublisher: INewPublisher ) => {
    try {
        const validation = newPublisherFieldsSchema.validate(newPublisher)
        if (validation.error) {
			throw new httpErrors.BadRequest(validation.error.message);
		}
		return validation.value;
    } catch (error) {
        return customGraphQLError(error)
    }

}

export default newPublisherFieldsValidation