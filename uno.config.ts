// uno.config.ts
import { defineConfig, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: ["Merriweather Sans", "Inter"],
      },
    })
  ],
  transformers: [
    transformerVariantGroup()
  ],
  // ...UnoCSS options
  theme: {
    colors: {
      primary: "#660066",
      secondary: "#E93E3A",
      accent: "#FFF33B",
      basicGray: "#FFF33B",
      basicPink: "#FFF1FF",
      basicBlack: "#000",
      basicWhite: "#fff",
    }
  }
})