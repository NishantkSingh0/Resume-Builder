/*
 - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
 - Copyright (C) 2025 NishantkSingh0
 - Licensed under the GNU GPL v3.0 - see LICENSE file for details.
 */

import React from 'react';
import styled from 'styled-components';

const Switch = ({ onClick, className }) => {
   return (
     <StyledWrapper className={className}>
       <label>
         <input className="toggle-checkbox" type="checkbox" onClick={onClick} />
         <div className="toggle-slot">
           <div className="sun-icon-wrapper">
             <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false" />
           </div>
           <div className="toggle-button" />
           <div className="moon-icon-wrapper">
             <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false" />
           </div>
         </div>
       </label>
     </StyledWrapper>
   );
 };

const StyledWrapper = styled.div`
  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-slot {
    font-size: 10px;
    position: relative;
    height: 3.5em;
    width: 7em;
    border: 0px solid transparent;
    border-radius: 10em;
    background-color: white;
    transition: background-color 250ms;
  }

  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #374151;
  }

  .toggle-button {
    transform: translate(0.3em, 0.25em);
    position: absolute;
    height: 3em;
    width: 3em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.75em white;
    transform: translate(3.65em, 0.25em);
  }

  .sun-icon {
    position: absolute;
    height: 6em;
    width: 6em;
    color: #ffbb52;
  }

  .sun-icon-wrapper {
    position: absolute;
    height: 6em;
    width: 6em;
    opacity: 1;
    transform: translate(2em, 2em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(3em, 2em) rotate(0deg);
  }

  .moon-icon {
    position: absolute;
    height: 6em;
    width: 6em;
    color: white;
  }

  .moon-icon-wrapper {
    position: absolute;
    height: 6em;
    width: 6em;
    opacity: 0;
    transform: translate(11em, 2em) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(2em, 2em) rotate(-15deg);
  }`;

export default Switch;
