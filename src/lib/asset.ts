const base = import.meta.env.BASE_URL

/** Prefix a public-dir path with the deploy base. Absolute URLs and data URIs pass through. */
export function asset(path: string): string {
  if (/^(https?:|data:|#)/.test(path)) return path
  return `${base}${path.replace(/^\/+/, '')}`
}

/** Href for a symbol inside the public icons sprite. */
export function iconHref(id: string): string {
  return `${base}icons.svg#${id}`
}
