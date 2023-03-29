import { toggled } from "../actions";

const toggleTodo = (id, currentStatus) => {
   return async (dispatch, getState) => {
      const response = await fetch(`http://localhost:9000/todos/${id}`, {
         method: "PATCH",
         body: JSON.stringify({
            completed: !currentStatus,
         }),
         headers: {
            "Content-type": "application/json",
         },
      });
      dispatch(toggled(id));
   };
};

export default toggleTodo;
