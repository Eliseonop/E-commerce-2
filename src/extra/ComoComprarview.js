import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {comocomprar} from "../markdown/comoComprarmd"
export default function ComoComprarview() {
    return (
        <div id="extra">
            <Markdown id="comocomprarview">
                {comocomprar.body}
            </Markdown>
        </div>
    )
}
