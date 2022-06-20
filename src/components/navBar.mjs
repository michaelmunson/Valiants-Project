import { $, BR, BUTTON, Component, css, DIV, I } from "oxidizer";

export default class NavBar extends Component {
    
    get css() {
        return css`
            nav-bar {
                position:fixed;
                background: rgb(0,0,0,.5);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                height:100px;
                width:100%;
                display:flex;
                flex-flow: row wrap;
                border-radius: 0px 0px 15px 15px;
                align-items: center;
            }
            nav-bar div {
                flex : 1 1 auto;
                display:flex;
                flex-flow: row nowrap;
                justify-content: center;
            }
            nav-bar div.brand {
                color:white;
                font-size: 1.3em;
                justify-content: left !important;
                flex : 0 1 auto;
                padding : 0px 50px 0px 10px;
            }
            nav-bar div.brand i {
                font-size: 3em;
                padding-right: 20px;
            }
            nav-bar .nav-button {
                background: transparent;
                padding: 10px;
                font-size: 1.2em;
                border-radius: 5px;
                border: 1px solid white;
                color:white;
                font-family: inherit;
                transition: 200ms;
            }
            nav-bar .nav-button:hover {
                /* background-color: rgba(255, 255, 255, 0.6);
                color:black; */
                transform: scale(1.1);
            }
            nav-bar .nav-button.active {
                background: white;
                color: black;
            }
        `;
    }

    switchPage (page) {
        
        this.querySelectorAll('.nav-button').forEach(node => {
            if (node.getAttribute('route-id') !== page) node.classList.remove('active');
            else node.classList.add('active');
        });

        const router = $('page-router')[0];
        router.switch(page);

    }

    render(props) {

        const links = [
            "Home",
            "Resources",
            "About",
            "Quiz"
        ];

        const navbar = this;

        return [
            new DIV({class:'brand'}, [
                new I({class:'bi bi-asterisk'}),
                "Valiants for",
                new BR(),
                "Inclusive",
                new BR(),
                "Sex Ed."
            ]),
            new DIV({class:'links'},[
                ...links.map(link => 
                    new DIV([
                        new BUTTON({
                            class:`nav-button ${link==="Home" ? " active" : ""}`,
                            id:link.toLowerCase(),
                            textContent: link,
                            'route-id':link.toLowerCase(),
                            onclick(){
                                navbar.switchPage(this.getAttribute('route-id'));
                            }
                        }),
                    ])
                )
            ])
        ];    
    }

}

