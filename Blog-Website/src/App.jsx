import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div>
      <div className="bg-blurred"></div>
      <div className="min-h-screen flex flex-wrap content-between">
        <div className="w-full block">
          <Header />
          <main>
            <div className="min-h-screen">
            <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  ) : null
}

export default App;
