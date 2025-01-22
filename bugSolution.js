useEffect(() => {
  // Correct way to update state using functional update.
  setCount(prevCount => prevCount + 1);
}, []);