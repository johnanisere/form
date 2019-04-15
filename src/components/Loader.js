import React from "react";
import { BeatLoader } from "react-spinners";
import ActivityIndicator from "../blocks/ActivityIndicator";

const Loader = () => (
  <ActivityIndicator>
    <BeatLoader size={9} />
  </ActivityIndicator>
);

export default Loader;
