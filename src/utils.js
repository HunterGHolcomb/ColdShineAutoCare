export const imageAssets = {
  'hero-detailing.webp': 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=2400&q=90',
  'mobile-detailing.webp': 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=2200&q=90',
  'interior-detailing.webp': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90',
  'headlight-polishing.webp': 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2200&q=90',
}
export const asset = (name) => imageAssets[name] || imageAssets['hero-detailing.webp']
