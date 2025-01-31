```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

export default App;
```
This code uses the `*` wildcard in the `path` prop of the `Route` component to match any route that doesn't match the previous routes.  However, if there's an error or unexpected behavior with the routing, this could become problematic, as it acts as a catch-all and might mask other underlying route errors.