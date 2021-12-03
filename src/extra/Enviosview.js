import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {enviosmd} from "../markdown/enviosmd"

export default function Enviosview() {
    return (
        <div id="extra">
            <Markdown id="enviosview">
                {enviosmd.body}
            </Markdown>

        </div>
    )
}
