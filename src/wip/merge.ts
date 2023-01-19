import _merge from "lodash.merge"

const merge: typeof _merge = (...args) => {
    if (Array.isArray(args)) { args = [args] }
    return _merge({}, ...args)
}

export default merge
