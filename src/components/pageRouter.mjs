import { Component, css } from "oxidizer";
import HomePage from "./pages/homePage.mjs";
import ResourcesPage from "./pages/resourcesPage.mjs";
import QuizPage from "./pages/quizPage.mjs";
import AboutPage from "./pages/aboutPage.mjs";
import data from "../data.mjs";


export default class PageRouter extends Component {

    get css(){
        return css`
        
        `
    }

    getRoute(route){
        const routes = {
            "home" : () => new HomePage(),
            "resources" : () => new ResourcesPage(),
            "about" : () => new AboutPage(),
            "quiz" : () => new QuizPage({questions: data.questions}),
        };

        if (route in routes)
            return routes[route];

        else {
            console.warn('404: /'+route+' not found');
            return routes.home;
        }
    }

    switch(route){
        this.props.route = route;
    }

    render (props) {
        window.scrollTo({top:0});
        const route = this.getRoute(props.route);
        return [
            route.call(this)
        ];
    }

}


