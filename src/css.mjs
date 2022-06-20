import { css } from "oxidizer";
import data from "./data.mjs";

const props = {
    bgDuration : 500,
    //bg : 'top, #f86b6b 0%,#fefa81 16%,#8afc8a 32%,#98fffd 50%,#a5a8ff 66%,#ff89fd 82%,#ff8181 100%',
    bg : 'top, #f86b6b 0%,#fefa81 16%,#8afc8a 32%,#ff89fd 82%,#ff8181 100%',
    font: "'Raleway', sans-serif"
}

const bsColors = data.bootstrap.colors; 

export const styles = css`

    /* W3C */
    @keyframes fun-time-awesome {
        0% {background-position: left top;}
        100% {background-position: left bottom;}

    }

    /* Firefox */
    @-moz-keyframes fun-time-awesome {
        0% {background-position: left top;}
        100% {background-position: left bottom;}
    }

    /* Chrome, Safari */
    @-webkit-keyframes fun-time-awesome {
        0% {background-position: left top;}
        100% {background-position: left bottom;}
    }

    :root {
        font-family: ${props.font};
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: ${props.font};
    }

    body {
        font-family: ${props.font};

        /* W3C */
        background: linear-gradient(${props.bg});

        /* Firefox */
        background: -moz-linear-gradient(${props.bg});

        /* Chrome,Safari4+ */
        background: -webkit-gradient(${props.bg});

        /* Chrome10+,Safari5.1+ */
        background: -webkit-linear-gradient(${props.bg});

        background-size: 1000%;
        -moz-background-size: 1000%;
        -webkit-background-size: 1000%;	

        /* W3C */
        animation-name: fun-time-awesome;
        animation-duration: ${props.bgDuration}s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;

    }

    hr {
        width:90%;
        background: black;
        height: 1px;
        border: 0px;
    }


    .flxrow {
        display:flex;
        flex-flow: row nowrap;
    }
    .flxcol {
        display:flex;
        flex-flow: column nowrap;
    }

    button {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6 {
        margin:0px;
    }

    .btn {
        background: transparent;
        color:white;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid white;
        font-family: inherit;
        transition: all 200ms ease 0s;
    }

    .btn.active {
        background: white;
        color:black;
    }

    .btn:hover {
        transform:scale(1.05);
        opacity:.9;
    }

    /* ::-webkit-scrollbar {
        width:0px;
        transition:300ms;
    } */
`;




