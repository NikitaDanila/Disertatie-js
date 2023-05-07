import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import AssociationListScreen from "./screens/AssociationListScreen";
import HomeScreen from "./screens/HomeScreen";
import IndexScreen from "./screens/IndexScreen";
import Login from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListScreen from "./screens/UserListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<IndexScreen />} />
            <Route path="/homepage" element={<HomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route
              path="/admin/associationList/"
              element={<AssociationListScreen />}
            />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
