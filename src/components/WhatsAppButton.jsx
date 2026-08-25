import { useState } from "react";

function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  const phone = "918830451660";

  const message =
    "Hello Kantule Edutech, I would like to know more about MBBS admission.";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "clamp(16px, 2.5%, 20px)",
        bottom: "clamp(16px, 2.5vh, 20px)",
        zIndex: 40,
      }}
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      {showMessage && (
        <div
          style={{
            position: "absolute",
            right: "70px",
            bottom: "8px",
            background: "#ffffff",
            color: "#082d63",
            padding: "10px 15px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            fontSize: "13px",
            fontWeight: "600",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          Chat with us on WhatsApp
        </div>
      )}

      <button
        type="button"
        onClick={handleWhatsApp}
        aria-label="Chat with Kantule Edutech on WhatsApp"
        style={{
          width: "60px",
          height: "60px",
          padding: "0",
          margin: "0",
          border: "none",
          outline: "none",
          borderRadius: "50%",
          background: "#16C47F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(22, 196, 127, 0.35)",
          transition: "transform 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <svg
          width="31"
          height="31"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3C8.82 3 3 8.82 3 16C3 18.29 3.59 20.43 4.63 22.3L3.2 28.8L9.76 27.37C11.62 28.41 13.72 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3Z"
            fill="white"
          />

          <path
            d="M21.4 18.4C21.12 18.26 19.76 17.59 19.51 17.49C19.26 17.4 19.08 17.35 18.9 17.63C18.72 17.91 18.2 18.52 18.05 18.7C17.9 18.89 17.74 18.91 17.46 18.77C17.18 18.63 16.28 18.34 15.22 17.39C14.39 16.65 13.89 15.74 13.74 15.46C13.6 15.18 13.73 15.03 13.87 14.89C14 14.76 14.15 14.55 14.29 14.39C14.43 14.22 14.48 14.1 14.57 13.91C14.67 13.72 14.62 13.56 14.55 13.42C14.48 13.28 13.98 12.07 13.77 11.58C13.57 11.09 13.36 11.16 13.2 11.15C13.05 11.14 12.87 11.14 12.69 11.14C12.51 11.14 12.22 11.21 11.98 11.49C11.74 11.77 11.07 12.4 11.07 13.61C11.07 14.82 11.99 15.99 12.12 16.15C12.25 16.33 13.93 18.92 16.51 20.04C17.13 20.31 17.62 20.47 18 20.59C18.62 20.79 19.18 20.76 19.62 20.68C20.12 20.61 21.16 20.07 21.37 19.47C21.58 18.87 21.58 18.36 21.51 18.25C21.45 18.14 21.28 18.08 21.4 18.4Z"
            fill="#16C47F"
          />
        </svg>
      </button>
    </div>
  );
}

export default WhatsAppButton;