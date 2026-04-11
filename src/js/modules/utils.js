export function toMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function toDirectionsLink(query) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function createInstagramLink(handle) {
  if (!handle) return "";
  return `https://www.instagram.com/${handle.replace("@", "")}/`;
}

export function createMapsQuery(name, address = "") {
  return [name, address, "João Pessoa PB"].filter(Boolean).join(", ");
}

export function createIframeSrc(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
