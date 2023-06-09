import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import TodoCard from "./TodoCard";

const TodoList = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todos);
   const filters = useSelector((state) => state.filters);
   const { status, colors } = filters;

   useEffect(() => {
      dispatch(fetchTodos);
   }, [dispatch]);

   const filterByStatus = (todo) => {
      switch (status) {
         case "Incomplete":
            return !todo.completed;
         case "Complete":
            return todo.completed;

         default:
            return true;
      }
   };

   const filterByColors = (todo) => {
      if (colors.length > 0) {
         return colors.includes(todo?.color);
      }
      return true;
   };

   return (
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
         {todos
            .filter(filterByStatus)
            .filter(filterByColors)
            .map((todo) => (
               <TodoCard todo={todo}></TodoCard>
            ))}
      </div>
   );
};

export default TodoList;
