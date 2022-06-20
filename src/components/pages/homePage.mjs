import { $, BR, Component, css, DIV, H1, H3, HEADER, HR, I, SECTION } from "oxidizer";
import Card from "../card.mjs";

export default class HomePage extends Component {
    
    get css(){
        return css`
            home-page {
                margin: 20px;
                margin-top:50px !important;
            }

            header {
                margin-top:  130px;
            }

            h1.title {
                text-align: center;
                font-size: 3em;
                margin:0;
                /* text-decoration: underline; */
            }

            hr {
                height: 1px;
                background: rgb(0,0,0,.3);
                border: 0px;
                margin: 20px auto;
                width:90%;
            }

            section.subtitle {
                /* padding-top: 15px; */
                font-size: 1.7em;
                text-align: center;
                width:75%;
                margin:auto;
            }

            section.statistics {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                margin: 50px 20px 20px 20px;
            }

            section.statistics .stat-card {
                /* flex : 1 0 auto; */
                text-align: center;
                font-size: 1.2em;
                max-width:230px;

            }

            section.statistics .stat-card h3 {
                font-size: 2em;
                margin:0px;
                
            }

            section.more-section {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            }
        `;
    }

    render(props){
        
        const cards = [
            {
                title: 'Want to help?',
                text: `Get access to resources, activist organizations, and more.`,
                button: {
                    textContent:'Learn More',
                    onclick(){
                        const navbar = $('nav-bar')[0];
                        navbar.switchPage('resources');
                    }
                },
            },
            {
                title: 'Where do you stand?',
                text: `Take our quiz to find out where you stand on the issues.`,
                button: {

                    textContent:'Go to Quiz',
                    onclick(){
                        const navbar = $('nav-bar')[0];
                        navbar.switchPage('quiz');
                    }
                },
            }
        ]

        return [

            new HEADER([
                new H1({class:'title'}, "End New York's Sexual Education Injustices Now")
            ]),

            new HR(),

            new SECTION({class:'subtitle'}, [
                new I({textContent: "Hundreds of thousands "}),
                `of New Yorkers
                are silently suffering as a result of the State's
                refusal to provide our youth with the
                inclusive and holistic sexual education
                that they need and deserve.`
            ]),

            new SECTION({class:"statistics"}, [
                new DIV({class:"stat-card"}, [
                    new H3(["1/2"]),
                    "of all NY pregnancies are unplanned."
                ]),
                new DIV({class:"stat-card"}, [
                    new H3(["5.8%"]),
                    "of all teens",
                    new BR(),
                    "will get pregnant."
                ]),
                new DIV({class:"stat-card"}, [
                    new H3(["69,500"]),
                    "young people will contract an STD this year."
                ]),
                
            ]),

            new SECTION({class:"card-container"}, [
                ...cards.map(card =>
                    new Card(card)
                )
            ]),
            new SECTION({class:"card-container"}, [
                new Card({
                    title: 'Get involved!',
                    text: `Help our cause and sign the petition to pass N.Y. State Senate Bill S2584A.`,
                    button: {
                        textContent:'Sign Petition',
                        onclick(){
                            window.location = "https://www.change.org/p/state-senator-samra-g-brouk-pass-n-y-state-senate-bill-s2584a-to-require-comprehensive-sex-education-in-our-schools-b84e88cf-6e99-4b93-af2f-d1b65e3783a4";
                        }
                    },
                })
            ]),

        ]

    }

}