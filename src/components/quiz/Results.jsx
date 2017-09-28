import React,{Component} from 'react';

class Results extends Component{
    render(){
        let percent = (this.props.score/this.props.questions.length)*100;
        let message = ''
        if(percent >= 80){
            message = 'Awesome Job!';
        } else if(percent >= 60){
            message = 'That was okay.';
        } else {
            message = 'That was horrible dude! Watch One Piece and try again.'
        }
        return (
            <div className="results">
                <div className="card">
                    <div className="card-block text-center">
                        <h4 className="card-title">
                            You got {this.props.score} out of {this.props.questions.length} Correct
                        </h4>
                        <br/>
                        <h1 className="display-4">
                            {percent}% - {message}
                        </h1>
                        <br/>
                        <hr/>
                        <br/>
                        <a href="./index.html">Take again</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;