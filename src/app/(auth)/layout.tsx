import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      <div className="bg-red-200">Navbar</div>
      <main>{children}</main>
      <div className="bg-blue-200">footer</div>
    </div>
  );
};

export default AuthLayout;
