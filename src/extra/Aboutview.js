import "../css/extraview.css"
import Markdown from 'markdown-to-jsx'
import {Aboutmd} from '../markdown/Aboutmd'

export default function aboutview() {
    return (
        <div className="text-center" id="extra">
            <Markdown id="aboutview">
                {Aboutmd.body}
            </Markdown>
        </div>
    )
}