import { Redirect } from "expo-router";
import React from "react";

const IndexScreen = () => {
  return <Redirect href={"/auth/signup"} />;
};

export default IndexScreen;
