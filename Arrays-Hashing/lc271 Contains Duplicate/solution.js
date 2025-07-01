function containsDuplicate(arr) {
  const map = new Map();

  for (const item of arr) {
    if (map.has(item)) {
      return true; // Duplicate found
    }
    map.set(item, true);
  }

  return false; // No duplicates
}