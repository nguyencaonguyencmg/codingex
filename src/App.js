import { Route, Routes } from "react-router-dom";
// import { history } from "../redux";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
// import { history } from "./redux";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route
            path="/"
            element={<SignInPage></SignInPage>}
          ></Route>
          <Route
            path="/signup"
            element={<SignUpPage></SignUpPage>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
