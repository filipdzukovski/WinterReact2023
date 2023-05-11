import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users } from "./components/users";
import { Comments } from "./components/comments";
import { CommentView } from "./components/comments/CommentView";
import { Provider } from "react-redux";
import { Login } from "./components/auth/Login";
import { PrivateRoute } from "./config/PrivateRoute";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        >
          <Route path="/users" element={<Users />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/comment/:commentId" element={<CommentView />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
