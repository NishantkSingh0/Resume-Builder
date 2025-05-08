/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0.github.io
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React, { useState } from 'react';
import axios from 'axios';
import OTPInput from 'react-otp-input';

const VarifyMob = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpId, setOtpId] = useState(null);
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    try {
      const response = await axios.post('https://textbelt.com/otp/generate', {
        phone: phoneNumber,
        key: '950059a58264fe3bf0f4bd336c3026bc2745393d4cnqVahReFGaPOpuQaUnvmd8p',
      });
      if (response.data.success) {
        setOtpId(response.data.otpId);
        setMessage('OTP sent successfully!');
      } else {
        setMessage('Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('An error occurred while sending OTP.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('https://textbelt.com/otp/verify', {
        otpId: otpId,
        otp: otp,
      });
      if (response.data.success) {
        setMessage('Phone number verified successfully!');
      } else {
        setMessage('Invalid OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('An error occurred while verifying OTP.');
    }
  };

  return (
    <div>
      <h2>Phone Number Verification</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
      <br />
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        separator={<span>-</span>}
      />
      <button onClick={verifyOtp}>Verify OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default VarifyMob;
