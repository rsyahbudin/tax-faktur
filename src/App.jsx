import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Homepage />,
      },
   ]);

   return (
      <div className="App">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
