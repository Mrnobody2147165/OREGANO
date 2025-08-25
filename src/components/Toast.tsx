import { useEffect } from "react";
import './css/Toast.css'

interface ToastProps {
  message:string,
  type:string,
  id:number,
  onClose:(id:number) => void,
}

const Toast = ({ message, type, id, onClose }:ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 2000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <div className={`toast ${type}`}>
      <span className="toast-message">{message}</span>
      <button className="toast-close-btn" onClick={() => onClose(id)}>
        &times;
      </button>
    </div>
  );
};

export default Toast