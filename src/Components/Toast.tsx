import React from "react";

const Toast: React.FC = () => {
  return (
    <div className="toast toast-end toast-middle">
      <div className="alert alert-success">
        <span>User Sent Successfully</span>
      </div>
    </div>
  );
};

export default Toast;
