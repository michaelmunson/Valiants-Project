import { html, css, DIV, H2, HR, H4, BUTTON } from "oxidizer";

export default class Card extends DIV {

    constructor(props){
        props = {
            class:'card',
            ...props
        }
        super(props);
    }

    get css(){

        return css`

            .card-container {
                display:flex;
                flex-flow: row nowrap;
                align-items:center;
                justify-content:space-evenly;
                margin:50px 15px;

            }

            .card {
                margin:15px;
                background: rgb(0,0,0,.5);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                padding: 5px;
                border-radius: 15px;
                color:white;
                flex: 1 1 0;
            }

            .card-header {
                display:flex;
                flex-flow:column nowrap;
                align-items:center;
                margin:5px;
            }

            .card-section {
                text-align:center;
                margin:5px;
                font-size:1.2em;
            }

            .card-footer {
                display:flex;
                justify-content:center;
                margin:15px;
            }

            .card-button {
                font-size:1.2em;
            }

            .card-container hr {
                background-color:lightgray;
                margin:10px;
            }
        `
    }

    render(props){
        return [
            new DIV({class:"card-header"}, [
                new H2({class:'card-title'}, [
                    props.title
                ])
            ]),
            new HR(),
            new DIV({class:'card-section'}, [
                new H4({class:'card-section-text'}, [
                    props.text
                ])
            ]),
            new DIV({class:'card-footer'}, [
                new BUTTON({class:'card-button btn active', ...props.button})
            ])
        ]
        return (html`
            <div class="card-header">
                <h2 class="card-title">
                    ${props.title}
                </h2>
            </div>
            <hr style="margin:10px;">
            <div class="card-section">
                <h4 class="card-section-text">
                    ${props.text}
                </h4>
            </div>
            <div class="card-footer">
                <button class="card-button btn active">
                    ${props.button}
                </button>
            </div>
        `)
    }

}

