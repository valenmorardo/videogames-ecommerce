import { CustomError } from "@utils/customError"

export interface Ierror {
    error: Error | CustomError
    status: number
    
}