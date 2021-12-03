/* import "../css/extraview.css" */
import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {cambiosmd} from '../markdown/cambioyDevolucionesmd'

export default function CambioyDevolucionesview() {
    return (
        <div id='extra'>
           <Markdown id="cambiosview">
                {cambiosmd.body}    
           </Markdown> 
        </div>
    )
}
