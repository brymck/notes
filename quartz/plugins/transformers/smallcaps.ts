import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"
import { Element, Text } from "hast"

export const SmallCaps: QuartzTransformerPlugin = () => {
  return {
    name: "SmallCaps",
    htmlPlugins() {
      const plugins: PluggableList = []

      plugins.push(() => {
        return (tree, _file) => {
          visit(tree, "element", (node) => {
            if (node.tagName === "p" && node.children) {
              // Recursively walk the <p> children
              const transformChildren = (children: (Element | Text)[]): (Element | Text)[] => {
                const result: (Element | Text)[] = []

                for (const child of children) {
                  if (child.type === "text") {
                    const text = child.value
                    const regex = /\b([A-Z]{2,})\b/g
                    let lastIndex = 0
                    let match: RegExpExecArray | null

                    while ((match = regex.exec(text)) !== null) {
                      if (match.index > lastIndex) {
                        result.push({
                          type: "text",
                          value: text.slice(lastIndex, match.index),
                        })
                      }
                      result.push({
                        type: "element",
                        tagName: "span",
                        properties: { className: ["small-caps"] },
                        children: [{ type: "text", value: match[1] }],
                      })
                      lastIndex = match.index + match[0].length
                    }

                    if (lastIndex < text.length) {
                      result.push({
                        type: "text",
                        value: text.slice(lastIndex),
                      })
                    }
                  } else if (child.type === "element") {
                    if (child.tagName === "code" || child.tagName === "pre") {
                      // Skip rewriting inside <code> or <pre> completely
                      result.push(child)
                    } else {
                      // Recurse into other elements like <a>, <b>, etc.
                      result.push({
                        ...child,
                        children: child.children ? transformChildren(child.children as (Element | Text)[]) : [],
                      })
                    }
                  }
                }

                return result
              }

              node.children = transformChildren(node.children)
            }
          })
        }
      })

      return plugins
    },
  }
}