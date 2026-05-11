import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919999999999"; // 👉 replace with your number
  const message = "Hello, I want to inquire about your machines";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        .wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;        /* ✅ RIGHT side */
          z-index: 9999;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;

          width: 52px;
          height: 52px;
          border-radius: 50%;

          background: #25D366;
          color: #fff;

          box-shadow:
            0 4px 20px rgba(37,211,102,0.45),
            0 2px 8px rgba(0,0,0,0.25);

          transition:
            transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.2s ease,
            background 0.2s ease;

          /* pulse ring */
          animation: wa-pulse 2.8s ease-in-out infinite;
        }

        .wa-btn:hover {
          background: #1ebe5d;
          transform: scale(1.12);
          box-shadow:
            0 6px 28px rgba(37,211,102,0.55),
            0 3px 10px rgba(0,0,0,0.3);
          animation: none;
        }

        .wa-btn svg {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25); }
          50%       { box-shadow: 0 4px 28px rgba(37,211,102,0.70), 0 0 0 8px rgba(37,211,102,0.12); }
        }

        /* Mobile: slightly smaller + tighter to corner */
        @media (max-width: 479px) {
          .wa-btn {
            width: 46px;
            height: 46px;
            bottom: 18px;
            right: 18px;
          }
          .wa-btn svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}