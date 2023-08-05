import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import SavedMovies from "./pages/SavedMovies";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Page from "./components/Page/Page";
import Error from "./components/Error/Error";

import { useState } from "react";

function App() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Page hasFooter>
              <Main />
            </Page>
          }
        />
        <Route
          path="/movies"
          element={
            <Page hasFooter>
              <Movies />
            </Page>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <Page hasFooter>
              <SavedMovies />
            </Page>
          }
        />
        <Route
          path="/profile"
          element={
            <Page>
              <Profile
                isEditing={isEditing}
                onEditClick={() => setIsEditing(!isEditing)}
              />
            </Page>
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
