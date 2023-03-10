import { appRoutes } from "./routes";
import LoadingBar from "react-top-loading-bar";
import usePageLoading from "./hooks/usePageLoading";
function App() {
  const { progress, setProgress } = usePageLoading();
  const router = useRoutes(appRoutes);
  const location = useLocation();
  useEffect(() => {
    setProgress(100);
    console.log("🐔🦢 ~ App ~ location:", location.pathname);
  }, [location]);
  return (
    <div className="App">
      <LoadingBar
        progress={progress}
        color="#5800FF"
        shadow={true}
      ></LoadingBar>
      {/* <RouterProvider router={router} /> */}
      {router}
    </div>
  );
}

export default App;
