import "./profile.css";
import React, { Fragment } from "react";
import Metadata from "../../pages/Metadata";
// import userEvent from "@testing-library/user-event";
import Loader from "../loader/Loader";
import { Container, Row, Col } from "react-bootstrap";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Profile = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  console.log(loading, "jhgfdxfcgvhbjnkml,");

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
    if (error) {
      alert.error(error);
    }
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`${user.name}'s Profile`} />
          {!user ? (
            <Loader />
          ) : (
            <>
              <div className="profileContainer">
                <div>
                  <h1>My Profile</h1>
                  <img src={user.avatar?.url} alt={user.name} />
                  <Link to="/me/update">Edit Profile</Link>
                </div>
                <div>
                  <div>
                    <h4>Full Name</h4>
                    <p>{user.name}</p>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <h4>Joined On</h4>
                    <p>{String(user.createdAt).substring(0, 10)}</p>
                  </div>

                  <div>
                    <Link to="/orders">My Orders</Link>
                    <Link to="/password/update">Change Password</Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
