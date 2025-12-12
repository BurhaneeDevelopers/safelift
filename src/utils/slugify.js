export const slugify = (str) => {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
};

export const unslugify = (str) => {
  // Add null/undefined check
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
