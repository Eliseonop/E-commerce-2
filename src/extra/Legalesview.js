import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import { Legalesmd } from "../markdown/Legalesmd"

export default function Legalesview() {
    return (
        <div id="extra">
            <Markdown id="legalesview">
                {Legalesmd.body}
            </Markdown>
        </div>
    )
}
