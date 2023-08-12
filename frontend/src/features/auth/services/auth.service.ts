// all auth methods like we do in the backend

import { DisplayUser } from "../models/DisplayUser.interface";
import { NewUser } from "../models/Newuser";
import axios from "axios";
import { BASE_API } from "../../../config";
import { LoginUser } from "../models/LoginUser.interface";
import { Jwt } from "../models/Jwt";
import { DecodedJwt } from "../models/DecodedJwt.interface";
import jwt_decode from "jwt-decode";

const register = async (newUser: NewUser): Promise<DisplayUser> => {
  try {
    const response = await axios.post(`${BASE_API}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (loginUser: LoginUser): Promise<Jwt> => {
  try {
    var response = await axios.post(`${BASE_API}/auth/login`, loginUser);

    if (response.data.success) {
      localStorage.setItem("jwt", JSON.stringify(response.data.data.jwt));

      const decodedJwt: DecodedJwt = jwt_decode(response.data.data.jwt);

      localStorage.setItem("user", JSON.stringify(decodedJwt.user));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return response.data.data.jwt;
};

const logout = async (): Promise<void> => {
  try {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const verifyJwt = async (jwt: string): Promise<boolean> => {
  try {
    const response = await axios.post(`${BASE_API}/auth/verify-jwt`, { jwt });
    if (response) {
      console.log("response", response);
      const jwtExpirationMs = response.data.data.exp * 1000;
      return jwtExpirationMs > Date.now();
    } else {
      return false;
    }
  } catch (error) {
    console.log("catch block" + error);
    throw error;
  }
};

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
