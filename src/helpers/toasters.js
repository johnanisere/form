import React from "react";

import SVG from "react-inlinesvg";
import { toast } from "react-toastify";
import ToastContainer from "../blocks/ToastContainer";

const config = {
  position: toast.POSITION.TOP_RIGHT
};
const BASE = "https://res.cloudinary.com/drqqv1c2v/image/upload";

const Container = ({ src, className, msg }) => (
  <ToastContainer>
    <SVG src={src} className={className} /> {msg}
  </ToastContainer>
);

export const toastError = err =>
  toast.error(
    <Container
      msg={err}
      className="toast-danger-icon"
      src={`${BASE}/v1543619703/danger.svg`}
    />,
    config
  );

export const toastSuccess = msg =>
  toast.success(
    <Container
      msg={msg}
      className="toast-success-icon"
      src={`${BASE}/v1543619743/success.svg`}
    />,
    config
  );

export const toastWarning = msg => {
  toast.warn(
    <Container
      msg={msg}
      className="toast-warning-icon"
      src={`${BASE}/v1543619814/warning.svg`}
    />,
    config
  );
};
