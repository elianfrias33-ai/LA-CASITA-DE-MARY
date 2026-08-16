import { whatsappLink } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola, me gustaría hacer una reserva.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2m0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.07 8.07 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.13 8.13 0 0 1-4.14-1.13l-.3-.17-3.12.82.83-3.04-.19-.31a8.07 8.07 0 0 1-1.25-4.33c0-4.48 3.65-8.07 8.18-8.07M8.53 6.85c-.17 0-.44.06-.67.31s-.88.86-.88 2.09.9 2.42 1.03 2.59c.13.17 1.76 2.8 4.38 3.83 2.16.86 2.6.69 3.07.65.47-.04 1.5-.61 1.72-1.2s.22-1.09.15-1.2c-.06-.1-.24-.16-.5-.29s-1.5-.74-1.74-.82c-.23-.09-.4-.13-.58.13s-.67.82-.82 1c-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.58-1.45-.81-1.98-.21-.51-.43-.44-.58-.45z"/>
      </svg>
      <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </a>
  );
}
