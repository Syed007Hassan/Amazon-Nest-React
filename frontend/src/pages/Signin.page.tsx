import React from "react";
import AuthLayout from "../features/auth/components/AuthLayout";
import SignInForm from "../features/auth/components/SignInForm";

export const SignInPage = () => {
  return (
    <AuthLayout>
      {" "}
      <SignInForm />
    </AuthLayout>
  );
};
