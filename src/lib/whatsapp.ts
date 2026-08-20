export const WHATSAPP_NUMBER = "919035429042";

// wa.me redirects to api.whatsapp.com, which is blocked on some networks.
// web.whatsapp.com/send opens WhatsApp Web directly and is more reliably reachable.
export function whatsappUrl(message: string) {
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}
