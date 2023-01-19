import type { AxiosError } from "axios"

/**
 * A [user-defined type guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) that checks for an `AxiosError`.
 *
 * This really ought to be included in axios..
 */
const isAxiosError = (error: any): error is AxiosError => {
    return error?.isAxiosError == true
}

export default isAxiosError
