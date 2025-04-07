import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-black">
      <img
        src="https://github.com/NishantkSingh0/NishantkSingh0/blob/main/Images/N.png?raw=true"
        alt="Wait a while 😐"
        title='Wait a while 😐. Content is loading'
        className="w-15 h-15 animate-step-rotate"
      />
    </div>
  );
};

export default Loader;