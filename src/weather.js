import { Audio } from "react-loader-spinner";

import React from "react";

export default function Weather() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
