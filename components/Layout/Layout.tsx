import React from "react";
import { Header } from "../Header";
import { Navigation } from "../Navigation";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Navigation />
    </>
  );
};

export default Layout;
