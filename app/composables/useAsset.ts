export function useAsset() {
  const baseURL = useRuntimeConfig().app.baseURL || '/'
  const base = baseURL.endsWith('/') ? baseURL : `${baseURL}/`

  return (path: string) => `${base}${path.replace(/^\//, '')}`
}
