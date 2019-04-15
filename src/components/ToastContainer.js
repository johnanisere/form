import React from "react";

import SVG from "react-inlinesvg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => (
  <ToastContainer
    hideProgressBar={true}
    closeButton={
      <SVG
        src="https://res.cloudinary.com/drqqv1c2v/image/upload/v1543619816/Close.svg"
        className="toast-close"
      />
    }
  />
);

export default App;
