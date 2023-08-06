import { DisplayUser } from "./displayUser.interface";

export interface DecodedJwt {
  user: DisplayUser;
  iat: number;
  exp: number;
}
