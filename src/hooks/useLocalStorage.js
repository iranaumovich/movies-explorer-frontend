export default function useLocalStorage() {
  const KEY = 'movie-search';
  const item = localStorage.getItem(KEY);
  const result = item ? JSON.parse(item) : null;

  const save = (results) => {
    localStorage.setItem(KEY, JSON.stringify(results));
  };

  const clear = () => {
    localStorage.removeItem(KEY);
  };

  return {
    save,
    clear,
    result,
  };
}
