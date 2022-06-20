import { Component, css, DIV, H1, HR, P } from "oxidizer";

export default class AboutPage extends Component {
    get css(){
        return css`
            about-page {
                display:flex;
                padding-top:180px;
                height:100%;
                width:100%;
                flex-flow: column nowrap;
                align-items: center;                
            }
            .about-p {
                margin:30px;
                font-size: 1.5em;
            }
        `
    }

    render(props){
        return [
            new H1({class: 'about-head'}, [
                "About Us"
            ]),
            new DIV({class: 'about-body'}, [
                new P({class: 'about-p'}, [
                    `We are students from Manhattanville College advocating for inclusive sex education for all. We believe inclusive sex education needs to include people with disabilities and people in the LGBTQ+ community. We also believe sex education needs to include topics of consent and sexual assault, and forming healthy relationships instead of unhealthy relationships that lead to abuse.`
                ])
            ]),

        ]
    }
}