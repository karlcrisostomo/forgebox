export const STORAGE_KEYS = {
  COLOR_SPACE: "forgebox_color_space",
} as const;

export const getStoredValue = <T>(key: string, defaultValue: T): T => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setStoredValue = <T>(key: string, value: T): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};
