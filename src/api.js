// src/api.js

export const fetchBackgroundImage = async () => {
  // Replace with your API URL or a static image URL
  const response = await fetch('https://api.unsplash.com/photos/random?query=background&client_id=YOUR_ACCESS_KEY');
  const data = await response.json();
  return data[0]?.urls?.regular || 'https://via.placeholder.com/1920x1080'; // Fallback image
};
