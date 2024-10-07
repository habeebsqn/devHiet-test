import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout";

import DashBoard from "./pages/DashBoard";
import Campaigns from "./pages/Campaigns";
import Messages from "./pages/Messages";
import Earning from "./pages/Earning";
import Settings from "./pages/Settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <DashBoard /> },
        { path: "campaigns", element: <Campaigns /> },
        { path: "messages", element: <Messages /> },
        { path: "earning", element: <Earning /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
