import { $, BODY } from "oxidizer";
import * as Components from "./components.mjs";
import {styles} from "./css.mjs";
import data from "./data.mjs";

const { NavBar, PageRouter } = Components;

export default class WebApp {
    get pageRouter(){
        return $('page-router')[0];
    }

    constructor(config = {}){
        this.config = config;
        this.sheet = styles.sheet;
        this.data = data;
        this.body = (
            new BODY([
                new NavBar(),
                new PageRouter({route:'home'})
            ])
        );
    }

    switch(route){
        this.pageRouter.switch(route);
    }

    render(){
        this.sheet.adopt();
        document.body.replaceWith(this.body);
        return this;
    }
}