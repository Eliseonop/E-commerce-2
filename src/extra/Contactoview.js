import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {contactomd} from "../markdown/contactomd"

export default function Contactoview() {
    return (
        <div id="extra">
           <Markdown id="contactoview">
               {contactomd.body}
           </Markdown> 
        </div>
    )
}

