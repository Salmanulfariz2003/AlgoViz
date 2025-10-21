import React from "react";
import Navbar from "./components/Navbar";
import AuthNavbar from "./components/AuthNavbar";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Sorting from "./pages/Sorting";
import { Main } from "./pages/Main";
import { Searching } from "./pages/Searching";
import { Heap } from "./pages/sorting/Heap";
import { Merge } from "./pages/sorting/Merge";
import { Quick } from "./pages/sorting/Quick";
import { Bubble } from "./pages/sorting/Bubble";
import { Selection } from "./pages/sorting/Selection";
import { Insertion } from "./pages/sorting/Insertion";
import {Linear} from "./pages/searching/Linear";
import {Binary} from "./pages/searching/Binary";
import { MergeVisualize } from "./pages/visualization/MergeVisualize";
import { HeapVisualize } from "./pages/visualization/HeapVisualize";
import { QuickVisualize } from "./pages/visualization/QuickVisualize";
import { BubbleVisualize } from "./pages/visualization/BubbleVisualize";
import { InsertionVisualize } from "./pages/visualization/InsertionVisualize";
import { SelectionVisualize } from "./pages/visualization/SelectionVisualize";
import { BinaryVisualize } from "./pages/visualization/BinaryVisualize";
import { LinearVisualize } from "./pages/visualization/LinearVisualize";
import { Card } from "./pages/visualizationcard/Card";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import ProtectedRoute from "./components/ProtectedRoute";
import { TimeComplexityCalculator } from "./pages/TimeComplexityCalculator.jsx";
import History from "./pages/History";
import ErrorPage from "./pages/ErrorPage";

const AppLayout = () => {
  const location = useLocation();
  const authRoutes = ["/login", "/register"];

  return (
    <div>
      {authRoutes.includes(location.pathname) ? <AuthNavbar /> : <Navbar />}
      <Outlet />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/time-complexity",
          element: <TimeComplexityCalculator />,
        },
        {
          path: "/sorting",
          element: <Sorting />
        },
        {
          path: "/searching",
          element: <Searching />
        },
        {
          path: "/sorting/heap",
          element: <Heap />
        },
        {
          path: "/sorting/merge",
          element: <Merge />
        },
        {
          path: "/sorting/quick",
          element: <Quick />
        },
        {
          path: "/sorting/bubble",
          element: <Bubble />
        },
        {
          path: "/sorting/selection",
          element: <Selection />
        },
        {
          path: "/sorting/insertion",
          element: <Insertion />
        },
        {
          path: "/searching/binary",
          element: <Binary/>
        },
        {
          path: "/searching/linear",
          element: <Linear/>
        },
        {
          path: "/visualization/MergeVisualize",
          element: <MergeVisualize/>
        },
        {
          path: "/visualization/HeapVisualize",
          element: <HeapVisualize/>
        },
        {
          path: "/visualization/QuickVisualize",
          element: <QuickVisualize/>
        },
        {
          path: "/visualization/BubbleVisualize",
          element: <BubbleVisualize/>
        },
        {
          path: "/visualization/InsertionVisualize",
          element: <InsertionVisualize/>
        },
        {
          path: "/visualization/SelectionVisualize",
          element: <SelectionVisualize/>
        },
        {
          path: "/visualization/BinaryVisualize",
          element: <BinaryVisualize/>
        },
        {
          path: "/visualization/LinearVisualize",
          element: <LinearVisualize/>
        },
        {
          path: "/visualizationcard/Card",
          element: <Card/>
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/history",
          element: (
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          ),
        },
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          ),
        },
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
};

export default App;