import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import UserList from "./pages/UserList";
import Products from "./pages/Products";
let router = [
  { path: "/", element: <Home /> },
  { path: "users", element: <UserList /> },
  { path: "newuser", element: <NewUser /> },
  { path: "products", element: <Products /> },
];
export default router;
