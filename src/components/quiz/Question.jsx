import React,{Component} from 'react';

class Question extends Component{
    onChange(e){
        e.preventDefault();
        const {setCurrent,setScore,question} = this.props;

        console.log(e.target.childNodes[1].innerHTML);

        let selected = e.target.childNodes[1].innerHTML;

        if(selected === question.correct){
            setScore(this.props.score+1);
        }

        setCurrent(this.props.current+1);
    }

    render(){
        const {question} = this.props;
        return (
            <div className="card">
                <div className="card-block">
                    <h3 className="card-title">{question.text}</h3>
                    <ul className="list-group list-group-flush">
                        {
                            question.choices.map(choice =>{
                                return (
                                    <li className="list-group-item" key={choice.id} onClick={this.onChange.bind(this)}>
                                        ({choice.id}) &nbsp; {choice.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Question;