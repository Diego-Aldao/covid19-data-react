import ContentLoader from "react-content-loader";

const LoaderInfo = (props) => (
  <ContentLoader
    speed={2}
    height={32}
    backgroundColor="#d0d1fc50"
    foregroundColor="#a9aaff50"
    {...props}
  >
    <rect x="0" y="5" rx="5" ry="5" width="150" height="25" />
  </ContentLoader>
);

export default LoaderInfo;
