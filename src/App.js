import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Dashboard, Locked, NotFound, Photo } from "./pages";
import { Nav, PrivateRoute } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route exact path="/photos/:id" element={<PrivateRoute><Photo /></PrivateRoute>} />
        <Route exact path="/locked" element={<Locked />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
