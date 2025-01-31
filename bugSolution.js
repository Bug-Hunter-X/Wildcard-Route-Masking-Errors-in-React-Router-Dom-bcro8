```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
}

export default App;
```
The improved solution utilizes `useLocation()` to display the pathname that caused the 404, giving more context for debugging.  In more complex apps, consider adding centralized error handling to catch and log route-related exceptions.  This enhances the diagnostic capabilities of the routing.