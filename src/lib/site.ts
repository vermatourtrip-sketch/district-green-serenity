export const phoneDisplay = "+91 89880 90088";
export const phoneHref = "tel:+918988090088";
export const whatsappMessage = "Hi, I would like to enquire about staying at The District Green, Kalpa. Please share availability, room rates and booking details.";
export const whatsappHref = `https://wa.me/918988090088?text=${encodeURIComponent(whatsappMessage)}`;
export const directionsHref = "https://www.google.com/maps/dir/?api=1&destination=The+District+Green+Kalpa+Himachal+Pradesh";
export const address = "Vill. Kashmir, Kalpa (15/2), Kalpa, Himachal Pradesh 172107";
export const mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217598.30905914196!2d77.95295129453125!3d31.552339699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390669c8e16799cd%3A0xf496cf8e14200802!2sThe%20District%20Green!5e0!3m2!1sen!2sin!4v1789631138669!5m2!1sen!2sin";

export const navItems = [
  ["Home", "/"], ["Rooms", "/rooms"], ["About", "/about"], ["Amenities", "/amenities"],
  ["Dining", "/dining"], ["Gallery", "/gallery"], ["Location", "/location"], ["Contact", "/contact"],
] as const;

export const makeHead = (title: string, description: string, path: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});
