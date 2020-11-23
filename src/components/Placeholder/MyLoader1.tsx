import React from "react";
import ContentLoader, { List, Code } from "react-content-loader";

const MyLoader1 = (props) => (
  <>
    <ContentLoader
      width={1000}
      height={550}
      viewBox="0 0 1000 550"
      backgroundColor="#eaeced"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="51" y="0" rx="5" ry="5" width="40" height="20" />
      <rect x="930" y="0" rx="4" ry="4" width="24" height="24" />
      <rect x="975" y="0" rx="3" ry="3" width="24" height="24" />

      <rect x="251" y="69" rx="4" ry="4" width="80%" height="40" />
      <rect x="251" y="129" rx="5" ry="5" width="80%" height="100" />

      <rect x="51" y="260" rx="4" ry="4" width="100%" height="40" />
      <rect x="51" y="320" rx="5" ry="5" width="100%" height="40" />
      <rect x="51" y="380" rx="4" ry="4" width="100%" height="40" />
      <rect x="51" y="450" rx="5" ry="5" width="100%" height="40" />
      <rect x="51" y="520" rx="4" ry="4" width="100%" height="40" />
    </ContentLoader>
  </>
);

export default MyLoader1;
