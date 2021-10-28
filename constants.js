export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.4;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;  // number of ticks
export const NIGHT_LENGTH = 4;

export const getNextHungerTime = clock=> Math.floor(Math.random()*3) + 6 + clock;
export const getNextDieTime = clock=> Math.floor(Math.random()*2) + 6 + clock;
export const getNextPoopTime = clock=> Math.floor(Math.random()*3) + 10 + clock;
