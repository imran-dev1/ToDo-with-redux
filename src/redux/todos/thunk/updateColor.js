import { colorSelected } from "../actions";

const updateColor = (id, color) => {
   return async (dispatch, getState) => {
      const response = await fetch(`http://localhost:9000/todos/${id}`, {
         method: "PATCH",
         body: JSON.stringify({
            color: color,
         }),
         headers: {
            "Content-type": "application/json",
         },
      });
      dispatch(colorSelected(id,color));
   };
};

export default updateColor;
