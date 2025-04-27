import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

export const FirstLetter: QuartzTransformerPlugin = () => {
  return {
    name: "FirstLetter",
    htmlPlugins() {
      const plugins: PluggableList = []

      plugins.push(() => {
        return (tree, _file) => {
          let firstParagraphFound = false

          visit(tree, "element", (node) => {
            if (!firstParagraphFound && node.tagName === "p") {
              if (node.children && node.children.length > 0 && typeof node.children[0].value === "string") {
                const firstLetter = node.children[0].value.trim().charAt(0)
                if (!node.properties) {
                  node.properties = {}
                }
                node.properties["data-first-letter"] = firstLetter
                firstParagraphFound = true
              }
            }
          })
        }
      })

      return plugins
    },
  }
}