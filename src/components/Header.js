import React, { useState } from "react";
import noteImage from "../assets/images/notes.png";
import doubleTickImage from "../assets/images/double-tick.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

const Header = () => {
   const [text, setText] = useState("");
   const dispatch = useDispatch();

   const handleAddTodo = (e) => {
      e.preventDefault();
      dispatch(addTodo(text));
      setText("");
   };

   const handleAllCompleted = () => {
      dispatch(allCompleted());
   };

   const handleClearCompleted = () => {
      dispatch(clearCompleted());
   };

   return (
      <div>
         <form
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            onSubmit={handleAddTodo}
         >
            <img src={noteImage} className="w-6 h-6" alt="Add todo" />
            <input
               type="text"
               placeholder="Type your todo"
               className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
            <button
               type="submit"
               className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
            ></button>
         </form>

         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li
               className="flex space-x-1 cursor-pointer"
               onClick={handleAllCompleted}
            >
               <img className="w-4 h-4" src={doubleTickImage} alt="Complete" />
               <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer" onClick={handleClearCompleted}>
               Clear completed
            </li>
         </ul>
      </div>
   );
};

export default Header;
