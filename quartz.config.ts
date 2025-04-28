import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Marginalia",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "brymck.github.io",
    ignorePatterns: [
      "private",
      "templates",
      // ".obsidian",
      "!(PublicMedia|fonts)**/!(*.md)",
      // "!(*.md)",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "EBGaramond12-Regular",
        body: "EBGaramond12-Regular",
        code: "FiraCode-Regular",
      },
      colors: {
        /*
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        */
        // Catppuccin Latte
        lightMode: {
          light: "#eff1f5",        // Base
          lightgray: "#ccd0da",    // Surface 1
          gray: "#9ca0b0",         // Overlay 1
          darkgray: "#4c4f69",     // Text
          dark: "#4c4f69",         // Text
          secondary: "#1e66f5",    // Blue
          tertiary: "#7287fd",     // Sky
          highlight: "rgba(4, 165, 229, 0.15)", // Sky (with alpha)
          textHighlight: "#df8e1d88", // Yellow (with alpha)
        },
        // Catppuccin Frappe
        darkMode: {
          light: "#303446",        // Base
          lightgray: "#51576d",    // Surface 1
          gray: "#626880",         // Overlay 1
          darkgray: "#c6d0f5",     // Text
          dark: "#c6d0f5",         // Text
          secondary: "#8caaee",    // Blue
          tertiary: "#99d1db",     // Sky
          highlight: "rgba(140, 170, 238, 0.15)", // Sky (with alpha)
          textHighlight: "#e5c89088", // Yellow (with alpha)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "catppuccin-latte",
          dark: "catppuccin-frappe",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.FirstLetter(),
    ],
    filters: [
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
