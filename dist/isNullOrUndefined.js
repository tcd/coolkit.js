export const isNullOrUndefined = (data) => {
    if (data == undefined) {
        return true;
    }
    if (data == null) {
        return true;
    }
    return false;
};
