export default function ColorReducer(state, action)
{
    switch(action.type) {
        case "NEW_COLOR":
            return {
                ...action.payload
            }
        case "CHANGE_INDEX":
            return {
                ...action.payload
            }
        case "UPDATE_PALETTE_LIST":
            return {
                ...action.payload
            }
        case "TOGGLE_MAIN_PALETTE":
            return {
                ...action.payload
            }
        case "SAVE_PALETTE":
            return {
                ...action.payload
            }
        default:
            return state;
    }
}