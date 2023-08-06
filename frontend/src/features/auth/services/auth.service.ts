// all auth methods like we do in the backend

import { DisplayUser } from "../models/DisplayUser.interface";
import { NewUser } from "../models/Newuser";
import axios from "axios";

const register = async (newUser: NewUser): Promise<DisplayUser> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      newUser
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const authService = {
  register,
  // login,
  // logout,
  // verifyJwt,
};

export default authService;
