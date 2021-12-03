import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {formasmd} from "../markdown/metodosDePagomd"


export default function Metodospago() {
    return (
        <div id="extra">
           <Markdown id="formasview">
                {formasmd.body}   
            </Markdown> 
        </div>
    )
}
