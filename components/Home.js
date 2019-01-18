import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Golden Acorn is life! 🌰</h1>
    <aside>
      <Link to={`/simple/states`}>With States</Link>
      <div />
      <Link to={`/simple/redux`}>With Redux</Link>
    </aside>
  </div>
);

export default Home;
