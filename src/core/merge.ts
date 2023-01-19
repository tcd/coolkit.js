import _merge from "lodash.merge"

/**
 * Wrapper around [`_.merge`](https://lodash.com/docs/4.17.15#merge) that does not mutate objects.
 */
const merge: typeof _merge = (...args) => {
    if (!Array.isArray(args)) { args = [args] }
    let result = {}
    _merge(result, ...args)
    return result
}

// const merge = <TObject, TSource>(object: TObject, source: TSource): TObject & TSource => {
//     return _merge({}, object, source)
// }

export default merge
