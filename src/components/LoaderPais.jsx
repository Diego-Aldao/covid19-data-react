import ContentLoader from "react-content-loader";

const LoaderPais = (props) => (
  <ContentLoader
    speed={2}
    height={48}
    backgroundColor="#d0d1fc50"
    foregroundColor="#a9abff50"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="80" height="48" />
    <rect x="100" y="12" rx="5" ry="5" width="180" height="25" />
  </ContentLoader>
);

export default LoaderPais;
