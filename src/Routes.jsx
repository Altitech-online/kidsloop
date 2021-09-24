import { Switch, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SignUp from "./pages/SignUp/SignUp";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route>
        <p>not found</p>
      </Route>
    </Switch>
  );
}
