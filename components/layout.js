import Navbar from "./navbar";

import Meta from "./meta";
import NavBar from "./navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavBar />
        <main>{children}</main>
    </>
  );
};
export default Layout;
