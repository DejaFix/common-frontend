export type ThemeMode = 'light' | 'dark' | 'auto'

/** 라이트/다크 강제 전환. 'auto'는 OS 설정을 따른다. */
export function setTheme(mode: ThemeMode): void {
  const root = document.documentElement
  if (mode === 'auto') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', mode)
}
