import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoaderComponent() {
    return (
        <Loader
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            type="ThreeDots"
            color="#F5C518"
            height={50}
            width={50}
      />
  )}
   
  export default LoaderComponent;