// src/components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5565999503234"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4
        w-12 h-12
        bg-green-500 hover:bg-green-600
        text-white
        rounded-full
        flex items-center justify-center
        shadow-lg
        transition-colors
        z-50
      "
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
