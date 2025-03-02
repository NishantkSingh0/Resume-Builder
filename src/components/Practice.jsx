import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [countdown, setCountdown] = useState(10);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1500);
      return () => clearTimeout(timer);
    } else {
      setError(true);
    }
  }, [countdown]);

  return (
    <StyledWrapper>
      {error ? (
        <p className="error-text">
          Server is not connected to Frontend. <br />
          Please read instructions mentioned on Git Repository <br />
          <a href="https://github.com/NishantkSingh0/resume-builder-web-application" target='_blank'><strong>NishantkSingh0/resume-builder-web-application</strong></a>
        </p>
      ) : (
        <div className="card ">
          <div className="blob" />
          <div className="bg">
            <p>Designing ...</p>
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;

  .card {
    position: relative;
    width: 220px;
    height: 320px;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 210px;
    height: 310px;
    background: rgba(255, 255, 255, 1);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    outline: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    color: #3449ff;
    font-weight: bold;
    padding: 10px;
  }

  .blob {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #3449ff;
    dark:bg-gray-900
    opacity: 1;
    filter: blur(8px);
    animation: blob-bounce 5s infinite ease;
  }

  .error-text {
    font-size: 16px;
    color: red;
    font-weight: bold;
    text-align: center;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Card;
