import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '221772012687'; // Format international sans + ni espaces
  const message = 'Bonjour IBX-Bijoux, je suis intéressé par vos bijoux.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999
      }}
      className="group"
    >
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#16a34a';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#22c55e';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <MessageCircle style={{ width: '32px', height: '32px', color: 'white' }} />
      </button>
      <span
        style={{
          position: 'absolute',
          right: '80px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.3s ease',
          pointerEvents: 'none'
        }}
        className="group-hover-tooltip"
      >
        Contactez-nous sur WhatsApp
      </span>
      <style>{`
        a.group:hover .group-hover-tooltip {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </a>
  );
}