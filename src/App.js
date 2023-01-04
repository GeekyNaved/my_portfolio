import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyle } from "./utils/GlobalStyle";
import Error from "./pages/Error";
import GoToTop from "./components/GoToTop";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;