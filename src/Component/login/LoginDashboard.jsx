import React from "react";
import "./LoginDashboard.css";
import mobileBg from "../../assets/mobile-bg.webp";
import qrCode from "../../assets/qr-code.webp";
import playStore from "../../assets/play-store.webp";
import appleStore from "../../assets/apple-store.webp";
import fingerprint from "../../assets/fingerprint.webp";

function LoginDashboard(){
  return (
    <div className="hero-section">
      <div className="hero-section1">
        <div className="image-part">
          <img src={mobileBg} alt="" />
        </div>

        <div className="text-part">
          <div className="text-part1">
            <h2>Inviting early adopters to test the Aadhaar app</h2>
          </div>
          <div className="text-part2">
            <h2>Download Now!</h2>
            <div className="sub-text-part">
              <span className="qr-code">
                <img src={qrCode} alt="" />
              </span>
              <span className="download-links">
                <img src={playStore} alt="" />
                <img src={appleStore} alt="" />
              </span>
            </div>
          </div>
          <div className="text-part3">
            <h3>Share feedback at <br /> feedback.app@uidai.net.in</h3>
          </div>
        </div>

        <div className="card-part">
          <h3>Welcome to myAadhar</h3>
          <img src={fingerprint} alt="" />
          <button>Login</button>
          <p>Login with Aadhar and OTP</p>
        </div>
      </div>

      <div className="hero-section2">
        <p>English</p>
        <p>हिंदी</p>
        <p>বাংলা</p>
        <p>ಕನ್ನಡ</p>
        <p>ગુજરાતી</p>
        <p>മലയാളം</p>
        <p>मराठी</p>
        <p>ଓଡ଼ିଆ</p>
        <p>ਪੰਜਾਬੀ</p>
        <p>தமிழ்</p>
        <p>తెలుగు</p>
      </div>
    </div>
  );
};

export default LoginDashboard;