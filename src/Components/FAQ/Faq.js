import "./Faq.css";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";
import clock from "./clock12.png";
import SpeachR from "./SFR.png";
import SpeachL from "./SPL.png";

class Counter1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: false,
      };
    }
    //function binding using arrow function//
    toggle = () => {
      this.setState({ value: !this.state.value });     
    };
    render() {
        console.log(this.state.value,this.props)
      return (
            <>
          <button className={this.state.value?"faq-button-onclick":"faq-button"} onClick={this.toggle}>
              <p className="question">{this.props.text.Q}</p>
              <FontAwesomeIcon icon={this.state.value?faAngleUp:faAngleDown}/>              
          </button>
          <p className="answer"> {this.state.value?this.props.text.Ans :" "}</p>
        </>
      );
    }
  }



const Faq = () => {
   var  q1={'Q':"How does it work?",
        'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
            }
    var  q2={'Q':"Which platform do you support?",
    'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
        }
    var  q3={'Q':"How does it work?",
    'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
        }
    var  q4={'Q':"How does it work?",
    'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
        }
    var  q5={'Q':"How to upgrade a free to a paid plan?",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    var  q6={'Q':"How to change a paid plan?",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    var  q7={'Q':"How to cancel a paid plan?",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    var  q8={'Q':"How to create a new workspace?",
        'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
            }
    var  q9={'Q':"What is a channel?",
    'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
        }
    var  q10={'Q':"How to invite team members?",
    'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
        }
    var  q11={'Q':"How to join a channel?",
    'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
        }
    var  q12={'Q':"Change password?",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    var  q13={'Q':"Enable 2FA Code",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    var  q14={'Q':"How to delete an account?",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    var  q15={'Q':"Refund policy",
'Ans':"4,730 curated design resources to energize your creative workflow. We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."   
    }
    return (
        <div className="accordian-container">            
            <div className="accordian-contents">
                <h2>Frequently asked questions</h2>
                <div className="content-container">                
                    <section className="basic-container">
                        <h3>The basics</h3>
                        <hr/>
                        <Counter1  text={q1}/>
                        <Counter1  text={q2}/>
                        <Counter1  text={q3}/>
                        <Counter1  text={q4}/>
                        <h3>Manage your plan</h3>
                        <hr/>
                        <Counter1  text={q5}/>
                        <Counter1  text={q6}/>
                        <Counter1  text={q7}/>
                    </section>
                    <section className="basic-container">
                        <h3>Using Solo</h3>
                        <hr/>
                        <Counter1  text={q8}/>
                        <Counter1  text={q9}/>
                        <Counter1  text={q10}/>
                        <Counter1  text={q11}/>
                        <h3>Security & Privacy</h3>
                        <hr/>
                        <Counter1  text={q12}/>
                        <Counter1  text={q13}/>
                        <Counter1  text={q14}/>
                        <Counter1  text={q15}/>                   
                    </section>
                </div>
                <div className="accordian-container-img">
                    <img className="Clock" src={clock} alt="clock-logo"/>
                    <img className="SFL" src={SpeachL} alt="Speach-R"/>
                    <img className="SFR" src={SpeachR} alt="Speach-L"/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Faq

