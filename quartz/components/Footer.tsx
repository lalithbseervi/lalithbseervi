import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <img width={80} height={15} loading={"lazy"} style={{ marginBottom: 0 }} src={"data:image/gif;base64,R0lGODlhUAAPALMAAAAAAP///7y8vI2NjYyMjIuLi2dnZ2ZmZmVlZf///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAABQAA8AAAT/8EhpJpoG1bMnPlfmjdJFlqRRdadXBXAsz3Rt33iuS4Hg/wIADECMAYC+wKDAJBQGS0J02XxOq9CClKm1aqnOrDTAQ/qEM6JZoCS43934G+7UzuVzZz0fJx96ZmgyamYBem52h110iHd0iZCOjWQGgECCmEeFegMESkuGTTCdTzB2MVABiaRZdqxgARqWZzaESKqThqZuhp5jvFqGUaGNUY1fkH6WRTiaQL2kqtJcqgO4qgXVMUzYT3pcTKR11BeAgjm2bJ3Dp6e/vp6ljcV2kMbJZUE6Q87qTfHcwMGAY4obomxV4ICDJLAcrX38ioDb0mTKHirIMn65yIUixS+xTv78IEKSJDpieRSlZJQyUcuVepStuaQjnLc3naS4WZJz55aeOp/c9MlzTidlEJMqXZq0gwkTIEZA3TCVAgWqHC6EKMGiAlQEYFt4eMohAgA7"} /><br />
        <img width={80} height={50} style={{marginTop: 0}} src={"/static/eyes_open_close.gif"} />  
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
