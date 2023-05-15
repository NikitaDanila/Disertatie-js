import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import AdminHomeScreen from "./screens/AdminHomeScreen";
import AssociationListScreen from "./screens/AssociationListScreen";
import HomeScreen from "./screens/HomeScreen";
import IndexScreen from "./screens/IndexScreen";
import Login from "./screens/LoginScreen";
import MetersScreen from "./screens/MetersScreen";
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
            <Route exact path="/" element={<IndexScreen />} />
            <Route path="/homepage" element={<HomeScreen />} />
            <Route path="/admin-homepage" element={<AdminHomeScreen />} />
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route
              path="/admin/associationList/"
              element={<AssociationListScreen />}
            />
            <Route path="/admin/meters" element={<MetersScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
