import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigateTo("/login");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {userInfo && userInfo.username && userInfo.isAdmin ? (
            <Nav>
              <LinkContainer to="/admin-homepage">
                <Navbar.Brand>E-Bloc</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/admin-homepage">
                <Nav.Link className="">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/meters">
                <Nav.Link className="">Meters</Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/admin-homepage">
                <Navbar.Brand>E-Bloc</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/homepage">
                <Nav.Link className="">Home</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              {userInfo && userInfo.username ? (
                <NavDropdown
                  title={userInfo.fullname}
                  id="username"
                  className=""
                >
                  <LinkContainer to="profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-menu" className="right">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/associationList">
                    <NavDropdown.Item>Association</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
