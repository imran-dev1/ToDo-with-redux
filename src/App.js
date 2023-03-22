import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { store } from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <div className="flex flex-col items-center bg-blue-100  px-6 font-sans h-screen">
            <Navbar></Navbar>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
               <Header></Header>

               <hr className="mt-4" />

               <TodoList></TodoList>

               <hr className="mt-4" />

               <Footer></Footer>
            </div>
         </div>
      </Provider>
   );
}

export default App;
