import React from "react";
import AuthLayout from "../features/auth/components/AuthLayout";
import RegistrationForm from "../features/auth/components/RegistrationForm";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegistrationForm></RegistrationForm>
    </AuthLayout>
  );
};
