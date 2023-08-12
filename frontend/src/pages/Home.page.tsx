import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/redux/hooks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { logout, reset } from "../features/auth/authSlice";
import { DisplayUser } from "../features/auth/models/DisplayUser.interface";

export const HomePage = () => {
  // dispatch will be used to dispatch actions to the store

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout()); // dispatch logout action
    navigate("/signin"); // redirect to login page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={logoutHandler}
        style={{
          backgroundColor: "yellow",
          cursor: "pointer",
          height: "40px",
          width: "60px",
          padding: "8px",
        }}
      >
        Logout
      </button>
      {user?.name ? user.name : "no user"}
    </div>
  );
};
