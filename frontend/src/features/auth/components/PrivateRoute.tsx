import React, { useEffect } from "react";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../hooks/redux/hooks";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reset, verifyJwt } from "../authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  // dispatch will be used to dispatch actions to the store
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { isSuccess, isAuthenticated, jwt } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    console.log("PrivateRoute useEffect called with jwt:", jwt?.token);

    if (!jwt || jwt?.token) return;

    dispatch(verifyJwt(jwt)); // verify the jwt token

    return () => {
      dispatch(reset()); // reset the isAuthenticated value when the component is unmounted
    };
  }, [jwt, isSuccess, dispatch]);

  return isAuthenticated ? page : <Navigate to="/signin" />;
};

export default PrivateRoute;
