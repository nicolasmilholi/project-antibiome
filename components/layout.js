import Navbar from "./navbar";

import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
