import React from "react";
import "./bottomcard.css";

const BottomSection: React.FC = () => {
  return (
    <div className="bottom-section-container">
      {/* Main Card */}
      <div className="main-card">
        {/* Section Header */}
        <h2 className="main-card-header">Explore Features</h2>
        {/* Grid for Smaller Cards */}
        <div className="card-grid">
          {/* Individual Cards */}
          <div className="card">
            <h3 className="card-title">How It Works</h3>
            <p className="card-description">
              Learn how to find the perfect roommate step by step.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Top Features</h3>
            <p className="card-description">
              Explore the features designed for secure and easy matching.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Top Matches</h3>
            <p className="card-description">
              See profiles that align closely with your preferences.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">My Profile</h3>
            <p className="card-description">
              Manage and customize your profile details easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
