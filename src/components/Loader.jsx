import React from "react";

import { Watch } from "react-loader-spinner";

const FullPageLoader = () => {
  return (
    <div className="loader">
      <Watch
        visible={true}
        height="100"
        width="100"
        radius="48"
        color="#fff"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default FullPageLoader;
