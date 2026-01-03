import React, { Suspense } from "react";

// project import
import Loader from "./Loader";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
  (Component: React.FC): React.FC =>
  (props) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
