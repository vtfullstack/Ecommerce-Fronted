import React, { Fragment, useEffect, useRef, useState } from "react";
import "./LoginReg.css";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, login,register } from "../../actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
const LoginReg = ({ history, location }) => {
  const alert = useAlert();
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  // POST METHODS for login and registrarton with backend
  const dispatch = useDispatch();

  const loginSubmit = (e) => {
    dispatch(login(loginEmail, loginPassword));
    e.preventDefault();
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm))
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

  const switchTabs = (e, tab) => {
    // console.log("EEEEEEEEEEEEE",e)
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  //   const loading = false;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit} autoComplete='off'>
                <div className="loginEmail">
                  <EmailIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    autocomplete="off"
                    className="form-control"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <KeyIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>

              <form
                className="signUpForm"
                autoComplete='off'
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="imagearea">
                  <img
                    src={avatarPreview}
                    alt="User Profile"
                    className="imageprofile"
                  />
                </div>

                <div className="signUpName">
                  <AccountCircleIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <EmailIcon />
                  <input
                    type="email"
                    autocomplete="off"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <KeyIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="registerImage">
                  {/* <img src={avatarPreview} alt="Avatar Preview" /> */}
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginReg;
