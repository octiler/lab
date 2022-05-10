import {LitElement, html, css} from 'lit'

class LitCounter extends LitElement {
    
    static properties = {
        count: {}
    }

    static styles = css`
        button{
            color: var(--my-color)
        }
    `

    constructor(){
        super()
        this.count = 0;
    }

    firstUpdated(){
        // this.count = 999;
    }

    render(){
        return html`<button @click=${()=>this.count++}>${this.count}</button>`
    }
}

customElements.define('lit-counter', LitCounter)
