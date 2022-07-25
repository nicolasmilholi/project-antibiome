import Navbar from "./navbar";

import Meta from "./meta";
import Example from "./newNavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Example />
        <main>{children}</main>
    </>
  );
};
export default Layout;
