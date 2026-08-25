export const WHATSAPP_NUMBER = "919035429042";

// Using api.whatsapp.com/send is universally supported on both mobile and desktop,
// automatically opening the native app on mobile and prompting options on desktop.
export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

