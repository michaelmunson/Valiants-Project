import { Component, html, css, H1, HR, H2, DIV, H3, A, P } from "oxidizer";
import data from "../../data.mjs"



export class Resource extends DIV {
    constructor(props){
        props.class = "resource-group";
        super(props);
    }

    get css(){
        return css`
            
        `
    }

    render(props){
        const {name, description, link} = props;
        return [
            new H3({class:'resource-name'}, [
                new A({href:link}, [
                    name
                ])
            ]),
            new P({class:'resource-description'}, [
                description
            ])
        ]
    }
}

export class ResourceGroup extends Component {
    get css(){
        return css`
            
        `
    }

    render(props){
        const {title, resources} = props;
        console.log(props)
        return [
            new H3({class:'resource-title'}, [
                title
            ]),

            ...resources.map(res => (
                new Resource(res)
            ))
        ]
    }
}

export default class ResourcesPage extends Component {
    get css(){
        return css`
            resources-page {
                display:flex;
                padding:30px;
                padding-top:140px;
                
                height:100%;
                width:100%;
                flex-flow: column nowrap;
                align-items: center;
            }
            .resources-header {
                font-size:2.5em;
            }
            .resource-name {
                font-size: 1.2em;
                margin-left: 10px !important;
            }
            .resource-description {
                font-size: 1.2em;
                margin: 10px 20px;
                margin-bottom: 30px;
                width:90%;
            }
            .resource-group {
                display:flex;
                flex-flow: column nowrap;
                height:100%;
                width:100%;
                flex: 0 0 0;
            }
            .resource-title {
                font-size:1.5em;
                margin-bottom: 10px;
                text-decoration: underline;
            }
        `
    }

    render(props){
        const resources = Object.entries(data.resources);
        console.log(resources)
        
        return (html`
            <h1 class="resources-header">Resources</h1>
            <div class="resource-group"> 
                <h3 class="resource-title"> Advocacy Groups </h3>

                <h3 class="resource-name"> 
                    <a href="https://www.equalityny.org/policy/comprehensive-sex-ed/"> Equity New York </a>
                </h3>
                <p class="resource-description">
                    Equity New York is a statewide advocacy and non-profit organization working to advance equality and justice for LGBTQI New Yorkers and their families. Equity New York is also dedicated to supporting candidates or public office in New York State who are committed to the civil rights and needs of the LGBTQI community. Equity NY promotes comprehensive sex education in schools
                </p>

                <h3 class="resource-name"> 
                    <a href="https://www.ahrcnyc.org/news/sex-ed-is-not-just-about-sex/"> AHRC New York </a>
                </h3>
                <p class="resource-description">
                    AHRC NY is an organization that has helped over 15,000 individuals with intellectual and developmental disabilities. They provide free aids and services to communicate effectively, and provide free language services to people whose primary language is not English. AHRC NY advocates for sex education in general, but also specifically with students with disabilities. 
                </p>

                <h3 class="resource-name"> 
                    <a href="http://sexedallianceofnyc.blogspot.com/"> SEANYC </a>
                </h3>
                <p class="resource-description">
                    The Sex Education Alliance of New York City (SEANYC) is a coalition comprised of students, parents, teachers, advocates, and community-based organizations that are working to improve comprehensive sexuality and health education in the New York City public schools.
                </p>

                <h3 class="resource-name"> 
                    <a href="https://www.plannedparenthood.org/planned-parenthood-greater-new-york/learn/sex-education"> Planned Parenthood </a>
                </h3>
                <p class="resource-description">
                    Planned Parenthood is the nations largest provider of sex education. They’re dedicated to providing non-judgemental, up-to-date, medically accurate information on sexual and reproductive health for adults, teens, and parents.
                </p>

                <h3 class="resource-title"> Bills </h3>

                <h3 class="resource-name"> 
                    <a href="https://www.equalityny.org/policy/comprehensive-sex-ed/"> S2584A </a>
                </h3>
                <p class="resource-description">
                    Requires comprehensive sexuality instruction for students in grades K-12 which includes a model curricula for comprehensive sexuality education and at a minimum conforms to the content and scope of national sexuality education standards.
                </p>
            </div>
        `)
        // return [
        //     new H1({class: 'resources-header'}, [
        //         "Resources"
        //     ]),
        //     ...resources.map(res => (
        //         new ResourceGroup({title:res[0], resources:res[1]})
        //     ))
        // ]
    }
}