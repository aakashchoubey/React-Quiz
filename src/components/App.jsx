import React,{Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is One Piece?',
                    choices: [
                        {
                            id: 'a',
                            text: 'A Dress'
                        },
                        {
                            id: 'b',
                            text: 'A Piano Piece'
                        },
                        {
                            id: 'c',
                            text: 'A Treasure'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 2,
                    text: 'Who is the protagonist in One Piece?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Gold D. Roger'
                        },
                        {
                            id: 'b',
                            text: 'Monkey D. Luffy'
                        },
                        {
                            id: 'c',
                            text: 'Roronoa Zoro'
                        },
                        {
                            id: 'd',
                            text: 'Nami'
                        },
                        {
                            id: 'e',
                            text: 'Chopper'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 3,
                    text: "Which of the following is the name of the protagonist's crew?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Red Hair Pirates'
                        },
                        {
                            id: 'b',
                            text: 'Heart Pirates'
                        },
                        {
                            id: 'c',
                            text: 'Beasts Pirates'
                        },
                        {
                            id: 'd',
                            text: 'Strawhat Pirates'
                        }
                    ],
                    correct: 'd'
                },
                {
                    id: 4,
                    text: 'Which fruit did Luffy ate?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Gomu Gomu no Mi'
                        },
                        {
                            id: 'b',
                            text: 'Mera Mera no Mi'
                        },
                        {
                            id: 'c',
                            text: 'Gura Gura no Mi'
                        },
                        {
                            id: 'd',
                            text: 'Hito Hito no Mi'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 5,
                    text: 'Who is the Vice-Captain of Strawhat Pirates?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Monkey D. Luffy'
                        },
                        {
                            id: 'b',
                            text: 'Roronoa Zoro'
                        },
                        {
                            id: 'c',
                            text: 'Sanji Vinsmoke'
                        },
                        {
                            id: 'd',
                            text: 'Nami Belmere'
                        }
                    ],
                    correct: 'b'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current){
        this.setState({current});
        console.log('Current : ' + current);
    }

    setScore(score){
        this.setState({score});
        console.log('Score : ' + score);
    }

    render(){
        let scorebox = <Scorebox {...this.state}/>;
        let results = '';
        if(this.state.current > this.state.questions.length){
            scorebox = '';
            results = <Results {...this.state}/>
        }
        return (
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
                {results}
            </div>
        );
    }
}

export default App;