import { create } from 'zustand'

type Theme = {
  dark: boolean
  darkOn: () => void
  darkOff: () => void
}

export const useTheme = create<Theme>()((set) => ({
  dark: false,
  darkOn: () => set(({ dark: true})),
  darkOff: () => set(({ dark: false})),
}))