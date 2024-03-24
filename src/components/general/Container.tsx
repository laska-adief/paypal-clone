import { ReactNode } from "react";
import Navbar from "./Navbar";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Container;
