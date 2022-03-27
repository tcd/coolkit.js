export const isBlank = (data) => {
    if (data == undefined) {
        return true;
    }
    if (data == null) {
        return true;
    }
    if (data === "") {
        return true;
    }
    if (Array.isArray(data) && data.length === 0) {
        return true;
    }
    if (data.constructor === Object && Object.keys(data).length === 0) {
        return true;
    }
    return false;
};
