import { SELECTEDCOLORS, SELECTEDSTATUS } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SELECTEDSTATUS:
         return {
            ...state,
            status: action.payload,
         };
      case SELECTEDCOLORS:
         const { color, changeType } = action.payload;
         switch (changeType) {
            case "added":
               return {
                  ...state,
                  colors: [...state.colors, color],
               };
            case "removed":
               return {
                  ...state,
                  colors: state.colors.filter(
                     (existingColor) => existingColor !== color
                  ),
               };

            default:
               return state;
         }

      default:
         return state;
   }
};
export default reducer;
