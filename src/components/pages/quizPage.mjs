import { $, BUTTON, Component, css, DIV, H1, H3, H6, HR, I, LABEL } from "oxidizer";
import data from "../../data.mjs";

const bsclrs = data.bootstrap.colors;

export class QuizQuestion extends Component {
    get css(){
        return css`
            @keyframes show-button {
                0% {
                    opacity:0;
                }
                100%{
                    opacity:1;
                }
            }
            @keyframes hide-button {
                100% {

                }
                0%{
                    
                }
            }

            button {
                font-family:inherit;
            }

            quiz-question {
                display:flex;
                flex-flow: column nowrap;
                position:fixed;
                transform:translateX(150vw);
                height:100%; 
            }
            .question-head {
                margin:10px;
            }
            .question-title {
                text-align:center;
            }
            .question-body {
                display:flex;
                flex-flow:column nowrap;
                align-items:center;
                justify-content:center;
            }

            .quiz-btn {
                width:100%;
                margin: 10px;
                padding: 15px;
                max-width: 50vw;
                border: 1px solid black;
                text-align: center;
                font-size: 1.7em;
                transition: 200ms;
            }
            .question-answer-container {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items:center;
            }
            .question-answer {
                border-radius: 30px;
                background: transparent;
                color: black;
            }
            .question-answer:hover {
                color:black;
                box-shadow: 1px 1px 5px rgb(0,0,0);
                transform:translateX(10px)
            }
            .question-answer.clicked {
                border:1px solid rgb(0,55,255);
                box-shadow: 1px 1px 5px rgb(0,55,255);
                color:rgb(0,55,255);
            }
            .question-answer.clicked:hover {
                background: transparent;
                transform:translateX(0px)
            }

            .quiz-action-btn {
                margin-top:30px;
                opacity:0;
                color:white;
                width:25% !important;
                border-radius:15px !important;
            }

            .quiz-action-btn:hover {
                box-shadow: 2px 2px 7px rgb(0,0,0,.3)
            }

            .submit-button {
                cursor:pointer;
                background-color:${bsclrs.success};
                margin-top:80px;
                color:white;
                border:0px;
                border-bottom:1px solid black;
            }
            .submit-button:hover {
                box-shadow: 2px 2px 5px black;
                background-color:rgb(35 141 59)
            }

            .next-button {
                background-color:${bsclrs.primary};
                animation: 250ms show-button ease-in;
                animation-fill-mode: forwards;
            }

            .quiz-action-btn.show {
                opacity:1 !important;
            }

            .show-correct {
                border:1px solid ${bsclrs.success} !important;
                box-shadow: 1px 1px 5px ${bsclrs.success} !important;
                background-color:${bsclrs.success} !important;
                color:black !important;
            }

            .show-incorrect {
                color:black !important;
                opacity:.3;
            }
            .show-incorrect.clicked {
                border:1px solid ${bsclrs.danger} !important;
                box-shadow: 1px 1px 5px ${bsclrs.danger} !important;
                background-color:${bsclrs.danger} !important;
            }

            .qc {
                font-size:2.5em !important;
            }

            .bi-check-lg {
                color:transparent;
                transition:200ms;
            }
            .bi-x-lg {
                color:transparent;
                transition:200ms;
            }
            .bi-check-lg.show {
                color:${bsclrs.success} !important;
            }
            .bi-x-lg.show {
                color:${bsclrs.danger} !important;
                transition:200ms;
            }

            .explanation {
                font-size: 1.5em;
                margin: 30px;
                text-align: center;
            }
        `
    }

    showNextButton(){
        $('.submit-button')[0].replaceWith(new BUTTON({
            class: 'quiz-btn next-button quiz-action-btn',
            textContent: 'Next Question',
            onclick(){
                this.parentElement.parentElement.parentElement.nextQuestion();
            }
        }))
    }

    showCorrect(){
        const n = this.props.question.correct.length;
        let i = 0;
        this.querySelectorAll('.question-answer-container').forEach((node, index) => {
            if (node.children[1].classList.contains('clicked')) {
                node.children[0].classList.add('show');
            }
            if (this.props.question.correct.includes(index)) {
                if (node.children[1].classList.contains('clicked')) i++;
                node.children[1].classList.add('show-correct')
            }
            else {
                node.children[1].classList.add('show-incorrect')
            }
            this.querySelector('.explanation').textContent = this.props.question.explanation;
        });
        if (n === i) $('quiz-page')[0].numCorrect += 1;

        this.showNextButton();
    }

    showExplanation(){

    }

    /** 
     * @render 
    */

    render(props){
        const {type, question, answers, correct, explanation} = props.question;

        const submitQuestionBtn = (
            new BUTTON({
                class: 'quiz-btn submit-button quiz-action-btn',
                textContent: 'Submit',
                onclick(){
                    this.parentElement.parentElement.showCorrect();

                }
            }, [
                new I({class:'bi'})
            ])
        );

        return [
            new DIV({class:'question-head'}, [
                new H1({class:'question-title', textContent: question}),
            ]),
            
            new DIV({class:'question-body'}, [
                ...answers.map((a, qindex) => 
                    new DIV({class:'question-answer-container'}, [
                        new I({class:`qc bi bi-${correct.includes(qindex) ? "check-lg" : "x-lg"}`}),
                        new BUTTON({
                            class:'quiz-btn question-answer',
                            textContent:a,
                            qindex,
                            onclick(){
                                
                                if (type === "single-choice") {
                                    this.parentElement.parentElement.querySelectorAll('.question-answer').forEach(node => node.classList.remove('clicked'));
                                }

                                this.classList.toggle('clicked');

                                submitQuestionBtn.classList.add('show');
                            }
                        }),
                    ])
                    
                ),    

                submitQuestionBtn,
            
                new H6({class:"explanation", textContent:""})
            ])
        ]
    }
}

export class QuestionsContainer extends Component {
    get css(){
        return css`
            questions-container {
                display:flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items:center;
            }
            .start-quiz {
                margin-top:40px;
                width:100%;
                border-radius:15px;
                border:1px solid black;
                background:rgb(0,0,0,.5);
                color:white;
                text-align:center;
            }
            .start-quiz:hover {
                background:inherit;
                color:black;
                box-shadow: 1px 1px 10px rgb(0,0,0,.7);
            }
            

            .consent-div {
                margin-top:60px;
                display:flex;
                flex-flow:row;
                align-items:center;
            }



            .consent-button {
                background-color:transparent;
                margin:0px 10px;
                padding:0px;
                border:1px solid black;
                border-radius:15px;
                height:26px;
                width:26px;
            }
            .consent-button.clicked {
                background-color:black !important;
            }

            .bi-check-lg {
                font-size:1.75em;
                color:transparent;
                transition:200ms;
            }
            .bi-check-lg.clicked {
                color:white;
                border-radius:15px;
                height:24px !important;
                width:24px !important;
            }

            .consent-label {
                font-size:1.2em;
            }
        `
    }

    getQuestion(index){
        return $('quiz-question')[index];
    }

    nextQuestion(){

        const childqs = $('quiz-question')
        

        const outNode = childqs[this.questionIndex];
        const inNode = childqs[this.questionIndex + 1];

        if (outNode) {
            outNode.classList.remove('question-in');
            outNode.classList.add('question-out');
        }
        if (inNode) {
            inNode.classList.add('question-in');
        }
        
        this.questionIndex += 1;

        if (this.questionIndex > 5) {
            this.innerHTML = `
            <h2 class="ending-message">
                You scored a ${$('quiz-page')[0].numCorrect} out of 6 on the test.
                <br><br>
                Based on the answers you provided, you might support bill <b>S25824A</b> which <i> 
                <br><br> 
                "Requires comprehensive sexuality instruction for students in grades K-12 which includes a model curricula for comprehensive sexuality education and at a minimum conforms to the content and scope of national sexuality education standards."</i>
                <br><br>

                <a href="https://www.nysenate.gov/legislation/bills/2021/S2584"> Click here to learn more,</a> or <a href="https://www.change.org/p/state-senator-samra-g-brouk-pass-n-y-state-senate-bill-s2584a-to-require-comprehensive-sex-education-in-our-schools-b84e88cf-6e99-4b93-af2f-d1b65e3783a4"> sign the petition! </a>
            </h2>`
        }

    }

    render(props){

        this.questionIndex = -1;
        
        return [
            new BUTTON({
                class:'quiz-btn start-quiz active',
                textContent:'Start Quiz',
                onclick(){
                    $('.quiz-bgn').addClass('question-out');
                    this.classList.add('question-out')
                    this.parentElement.nextQuestion();
                }
            }),

            new DIV({class:'consent-div quiz-bgn'}, [
                new BUTTON ({class: 'consent-button clicked'}, [
                    new I({class: 'bi bi-check-lg clicked', onclick(){
                        this.classList.toggle('clicked');
                        this.parentElement.classList.toggle('clicked')
                    }})
                ]),
                new LABEL({
                    class: 'consent-label',
                    textContent: 'I hereby allow my answers to the following questions to be recorded.'
                })
            ]),
            ...props.questions.map(question => 
                new QuizQuestion({question})
            )
        ];

    }
}

export default class QuizPage extends Component {
    get css(){
        return css`
            @keyframes question-out {
                0% {
                    transform:translateX(0vw);
                }
                100% {
                    transform:translateX(-150vw);
                }
            }
            @keyframes question-in {
            
                100% {
                    transform:translateX(0vw);
                }
            }

            quiz-page {
                display:flex;
                flex-flow:column nowrap;
                height:100%;
                justify-content:center;
                padding-top:100px;
            }
            .quiz-title {
                text-align:center;
                font-size:2.5em;
            }
            .quiz-subtitle {
                text-align:center;
                font-size:1.5em;
            }
            .question-out {
                animation: question-out .5s ease-in-out;
                animation-fill-mode: forwards;
            }
            .question-in {
                animation: question-in .5s ease-in-out;
                animation-fill-mode: forwards;
            }

            .ending-message {
                animation: show-button .3s ease-in-out;
                animation-fill-mode:forwards;
                margin:30px;
                text-align:center;
                font-size:1.8em;

            }
        `
    }



    render(props){
        this.numCorrect = 0;
        const questions = props.questions;

        return [
            new DIV([
                new H1({
                    class:'quiz-bgn quiz-title', 
                    textContent: 'Sex Education Policy Quiz'
                }),
                new HR({class:'quiz-bgn'}),
                new H3({
                    class:'quiz-bgn quiz-subtitle', 
                    textContent: 'Find out where you stand on Sexual Education policy with our quiz.'
                })
            ]),

            new QuestionsContainer({questions})
        ]
    }
}