/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";

const Switch = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledWrapper isDark={isDark}>
      <input type="checkbox" className="switch shadow-lg shadow-slate-400 dark:shadow-slate-700/80" checked={isDark} readOnly />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    width: 69px;
    height: 29px;
    margin: 0px;
    appearance: none;
    -webkit-appearance: none;
    background-color: ${({ isDark }) => (isDark ? "#2e6ada" : "rgb(0, 195, 255)")};
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
    transition: background-image .7s ease-in-out;
    outline: none;
    cursor: pointer;
    overflow: hidden;
  }

  .switch:checked {
    background-color: #2558b6; /* Dark Mode */
    background-size: cover;
    transition: background-image 1s ease-in-out;
  }

  .switch:after {
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    transform: translateX(40px); /* Move Right Initially */
    animation: on .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes on {
    0% {
      transform: translateX(0px);
      width: 25px;
    }

    50% {
      width: 37px;
      border-radius: 25px;
    }

    100% {
      transform: translateX(40px);
      width: 25px;
    }
  }

  .switch:checked:after {
    animation: off .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes off {
    0% {
      transform: translateX(40px);
      width: 25px;
    }

    50% {
      width: 37px;
      border-radius: 25px;
    }

    100% {
      transform: translateX(0px);
      width: 25px;
    }
  }

  .switch:checked:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    transform-origin: 53px 10px;
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
    animation: moon .7s forwards ease;
  }

  @keyframes moon {
    0% {
      transform: rotate(0deg);
      filter: blur(1px);
    }

    50% {
      filter: blur(1px);
    }

    90% {
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    100% {
      transform: rotate(170deg);
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }
  }

  .switch:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    filter: blur(1px);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4,
    0px 0px 20px #f5deb4,
    0px 0px 30px #f5deb4,
    inset 0px 0px 2px #efd3a3;
    transform-origin: 53px 10px;
    animation: sun .7s forwards ease;
  }

  @keyframes sun {
    0% {
      transform: rotate(170deg);
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    50% {
      background-color: transparent;
      box-shadow: 5px -1px 0px #fff;
      filter: blur(0px);
    }

    90% {
      background-color: #f5daaa;
      box-shadow: 0px 0px 10px #f5deb4,
      0px 0px 20px #f5deb4,
      0px 0px 30px #f5deb4,
       inset 0px 0px 2px #efd3a3;
      filter: blur(1px);
    }

    100% {
      transform: rotate(0deg);
      background-color: #f5daaa;
      box-shadow: 0px 0px 10px #f5deb4,
      0px 0px 20px #f5deb4,
      0px 0px 30px #f5deb4,
       inset 0px 0px 2px #efd3a3;
      filter: blur(1px);
    }
  }
`;

export default Switch;
