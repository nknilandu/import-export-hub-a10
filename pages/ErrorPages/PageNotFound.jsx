import error from "../../src/assets/error-404.png";

export default function PageNotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-10 gap-2">
      <title>Error | Import Export Hub</title>
      <div className="text-center text-xs -mt-20">
        <img src={error} alt="404" className="h-60 w-60 object-fill" />
        <p className="text-2xl">Page not found!</p>
        <p className="text-base-content/70">The page you are looking for is not available</p>
      </div>
    </div>
  );
}
