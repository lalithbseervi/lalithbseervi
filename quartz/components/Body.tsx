// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import nekoScript from "./scripts/neko.inline"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {children}
    </div>
  )
}

Body.afterDOMLoaded = `${clipboardScript} ${nekoScript}`
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
