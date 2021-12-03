import Markdown from 'markdown-to-jsx'
import "../css/extraview.css"
import {politicacookiesmd} from "../markdown/politicacookiesmd"


export default function Cookies() {
    return (
        <div id="extra">
            <Markdown id="cookiesview"  >
                {politicacookiesmd.body}    
            </Markdown> 
            
        </div>
    )
}
