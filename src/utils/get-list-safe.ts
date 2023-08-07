export function getListSafe<T, K extends string>(
  dict: Record<K, T[]>,
  key: K | undefined,
): T[] {
  if (!key) {
    return []
  }

  return dict[key] ?? []
}
