import React from "react";
import { FaUserAlt, FaUniversity, FaUsers, FaHome } from "react-icons/fa";
import "./bottomcard.css";

const BottomSection: React.FC = () => {
  return (
    <div className="card-row">
      {/* Individual Cards */}
      <div className="card">
        <div className="card-icon">
          <FaUserAlt />
        </div>
        <h3 className="card-title">Create Your Profile</h3>
        <p className="card-description">
          Start by creating a detailed profile that showcases your living
          preferences, lifestyle, and interests to help find the perfect
          roommate.
        </p>
      </div>
      <div className="card">
        <div className="card-icon">
          <FaUniversity />
        </div>
        <h3 className="card-title">Join Your College/University</h3>
        <p className="card-description">
          Once your profile is ready, join the college or university you're
          attending to connect with students in your area looking for roommates.
        </p>
      </div>
      <div className="card">
        <div className="card-icon">
          <FaUsers />
        </div>
        <h3 className="card-title">Find Roommate Matches</h3>
        <p className="card-description">
          Browse through profiles that match your preferences, lifestyle, and
          housing needs. Room8’s smart matching system makes it easy to find
          your ideal roommate.
        </p>
      </div>
      <div className="card">
        <div className="card-icon">
          <FaHome />
        </div>
        <h3 className="card-title">Secure Your Housing</h3>
        <p className="card-description">
          Once you've found the perfect roommate, secure your housing
          arrangement and move in together! Room8 ensures a smooth process from
          start to finish.
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
