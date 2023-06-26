
// import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
// import Error from "./components/Error";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import { Route,  Routes} from 'react-router-dom';

import RestaurantMenu from "./components/RestaurantMenu";

function App() {

  return (
    <div className="App">
     
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/restaurantmenu/:resid" element={<RestaurantMenu />} />
      </Routes>
      {/* */}

 
    </div>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path:'/about',
//     element: <AboutUs/>
//   },
//   {
//     path:'/contact',
//     element: <ContactUs/>
//   },
  
// ]);
export default App;
