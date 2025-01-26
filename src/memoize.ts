import stableHash from "stable-hash";

export function memoize<Args extends unknown[], Return>(
  fn: (...args: Args) => Return
): (...args: Args) => Return {
  const cache = new Map<string, Return>();
  return (...args) => {
    const hash = stableHash(args);
    const cached = cache.get(hash);
    if (cached != null) {
      return cached;
    }
    const result = fn(...args);
    cache.set(hash, result);
    return result;
  };
}
