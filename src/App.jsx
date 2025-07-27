import { useState } from "react";

import Nav from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";

import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      {/* <Navbar /> */}
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
