export const cities = [
    "London",
    "Paris",
    "New York City",
    "Tokyo",
    "Dubai",
    "Barcelona",
    "Rome",
    "Madrid",
    "Singapore",
    "Amsterdam",
];

export const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];
