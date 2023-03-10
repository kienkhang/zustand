const usePageLoading = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.addEventListener("load", () => {
      setProgress(100);
    });
    return () => {
      window.removeEventListener("load", () => {
        setProgress(0);
      });
    };
  });
  return {
    progress,
    setProgress,
  };
};

export default usePageLoading;
