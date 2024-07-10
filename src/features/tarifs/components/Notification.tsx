import React from "react";
import "./SearchBar.css";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="notification">
      <span>{message}</span>
      <button className="close-button" onClick={onClose}>✖</button>
    </div>
  );
};

export default Notification;
