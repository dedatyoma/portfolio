import React, { createContext, useState, useContext } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ show: false, message: '', title: '', type: 'success' });

  const showToast = (title, message, type = 'success') => {
    setToast({ show: true, title, message, type });
    
    setTimeout(() => {
      setToast({ show: false, message: '', title: '', type: 'success' });
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.show && (
        <div className={`toast-notification toast-${toast.type}`}>
          <div className="toast-content">
            <div className="toast-title">{toast.title}</div>
            <div className="toast-message">{toast.message}</div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext); 