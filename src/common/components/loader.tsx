import React from "react";

interface IProps {
  message?: string;
}

const Loader: React.FC<IProps> = ({ message }) => {
  return (
    <div className="loader">
      <div className="loader__message">{message}</div>
    </div>
  );
};

export default Loader;
