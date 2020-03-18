export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = (item, index) => {
    return {
        type: BUY_ITEM,
        payload: item,
        index: index,
    }
}

export const removeItem = (item, index) => {
    return {
        type: REMOVE_ITEM,
        payload: item,
        index: index,
    }
}