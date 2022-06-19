import React, {Component} from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor";
import "../../assets/css/funfact.css";

class FunfactItem extends Component {

    state = {
        appear: false
    }

    visibleChangeHandler = (isVisible) => {
        if(isVisible){
            this.setState({
                appear: true
            })
        }
    }

    render() {
        return (<div><h1>
            <span>Hack For</span>
            <div class="message">
              <div class="word1">prize</div>
              <div class="word2">skills</div>
              <div class="word3">success</div>
            </div>
          </h1>
            <div className="col-6 col-md-3 text-center" style={{marginLeft:"auto",marginRight:"auto"}} >
                <div className="counter-item" >
                    <h2 className="counter-number">
                        <CountUp start={this.state.appear ? 0 : null} end={this.props.counterNumber}>
                            {({ countUpRef }) => (
                                <div>
                                    {this.props.before}
                                    <span ref={countUpRef} />
                                    <VisibilitySensor
                                        onChange={(isVisible) => this.visibleChangeHandler(isVisible)}>
                                        <span className="sr-only">+</span>
                                    </VisibilitySensor>
                                    {this.props.after}
                                </div>
                            )}
                            
                        </CountUp>
                    </h2>

                    <h6 className="counter-txt">{this.props.counterText}</h6>
                </div>
            </div>
            </div>
        );
    }
}

export default FunfactItem;