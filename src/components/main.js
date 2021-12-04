import React, { Component } from "react";



class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            wt : 0,
            ht: 0,
            BMI : 0,
            note : "Your status will be shown here!!!",
            min : 0,
            max : 0
        };

        this.htupd = this.htupd.bind(this);
        this.wtupd = this.wtupd.bind(this);
        this.calcBMI = this.calcBMI.bind(this);
        this.submit = this.submit.bind(this);
    }

    htupd(e) {
        this.setState({ ht: e.target.value });
        e.preventDefault();
    }

    wtupd(e) {
        this.setState({ wt: e.target.value });
        e.preventDefault();
    }

    calcBMI(){
        var BMI = this.state.wt / ((this.state.ht/100) * (this.state.ht/100))
        var note = ""
        var min = 18.5 * ((this.state.ht/100) * (this.state.ht/100))
        var max = 24.99 * ((this.state.ht/100) * (this.state.ht/100))
        if( BMI >= 18.5  && BMI <= 24.9 ){
            note = "You are in a healthy weight range";
        }
        else if(BMI >= 25 && BMI <= 29.9){
            note = "You are Overweight";
        }
        else if(BMI >= 30){
            note ="You are Obese";
        }
        else if(BMI < 18.5){
          note = "You are Under Weight";
        }
        this.setState({note : note})
        this.setState({BMI : Math.round(BMI * 100) / 100})
        this.setState({min : Math.round(min * 100) / 100})
        this.setState({max : Math.round(max * 100) / 100})
    }

    submit(e){
        e.preventDefault();
        this.calcBMI();
    }


    render(){
        return(
            <div className="Main_class">
               
                <form onSubmit={this.submit} className="form_main">
                    <div className="htDiv">
                        <div className="label">
                            Enter your height in cms :
                        </div>
                        <br />
                        <input type="text" className="Input_box" value={this.state.ht} onChange = {this.htupd}></input>
                    </div>
                    <br />
                    <div className="wtDiv">
                        <div className="label">
                            Enter your weight in kgs :
                        </div>
                        <br />
                        <input type="text" className="Input_box" value={this.state.wt} onChange = {this.wtupd}></input>
                    </div>
                    <br />
                    <div className="submitDiv">
                        <input type="submit" value="Submit" />
                    </div>
                    <br />
                </form>
                <div className = "hr">
                    <div>
                        <h2>Your Report:</h2>
                    </div>
                    <div>Your BMI is <span className="bmi">{this.state.BMI}</span></div>
                    <div>{this.state.note}</div>
                    <br />
                    <br />
                    <div>The recommended BMI range for healthy lifestyle is 18.5 to 24.99</div>
                    <div>The recommended weigth range with respect to your height for a healthy lifestyle is {this.state.min} to  {this.state.max}</div>
                    
                </div>
                <div className="end">
                    For more details regarding BMI and health visit <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html">here</a>
                </div>
            </div>
        );
    }
}

export default Main;