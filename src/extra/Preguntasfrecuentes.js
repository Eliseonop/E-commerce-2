import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {preguntas_frecuentesmd} from "../markdown/preguntasFrecuentesmd"

export default function Preguntasfrecuentes() {
    return (
        <div id="extra">
            <Markdown id="preguntasview">
                {preguntas_frecuentesmd.body}
            </Markdown>
        </div>
    )
}

