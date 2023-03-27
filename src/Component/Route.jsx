import { isLoading, error, message } from "../Redux/Store/Slice/user.slice";
import dispatch from "../Redux/Store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { Login, Register } from "../pages/Auth/index.auth";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  const isLoading = useSelector(isLoading);
  const dispatch = useDispatch();
  const error = useSelector(error);
  const message = useSelector(message);

  const routes = [
    {
      path: "/Signin",
      component: <Login />,
    },
    { path: "/signUp", component: <Register /> },
  ];

  useEffect(() => {
    if (message !== "") toast.success(message);
    // dispatch(setMessage(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (error !== "") toast.error(error);
    // dispatch(setError(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
