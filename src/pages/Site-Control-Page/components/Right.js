import React, { Component } from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

//const styles = { height: 400, width: "100%" };
class RightCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          autoplay: false
        };
      }
      onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
      };
      slideNext = () => {
        this.slider.slideNext();
      };
      slidePrev = () => {
        this.slider.slidePrev();
      };
      goToSlide = () => {
        this.slider.goToSlide(4);
      };
      autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
      };
      _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        if (leftIcon && rightIcon) {
          this.setState({
            leftIcon: undefined,
            rightIcon: undefined
          });
        } else {
          this.setState({
            leftIcon: <span className="fa fa-glass" />,
            rightIcon: <span className="fa fa-music" />
          });
        }
      };
      render() {
        let { leftIcon, rightIcon } = this.state;
        return (
          <div className="container-fluid RightComponent">
            <div className="row">
              <div className="col-md-12" style={{ marginTop: 20 }}>
                <React_Bootstrap_Carousel
                  animation={true}
                  autoplay={this.state.autoplay}
                  slideshowSpeed={7000}
                  leftIcon={leftIcon}
                  rightIcon={rightIcon}
                  onSelect={this.onSelect}
                  ref={r => (this.slider = r)}
                  version={4}
                >
                  <div style={{ height:'90vh' }}>
                    <img
                      alt="solarimage"
                      style={{ width: "100%", height: "100%" }}
                      src={require('../../../assets/img/solar1.jpeg')}
                    />
                    <div className="carousel-caption">Image</div>
                  </div>
                  <div style={{ height:'90vh' }}>
                    <img
                      alt="solarimage"
                      style={{ width: "100%", height: "100%" }}
                      src={require('../../../assets/img/solar2.jpeg')}
                    />
                    <div className="carousel-caption">Image</div>
                  </div>
                  <div style={{ height:'90vh' }}>
                    <img
                      alt="solarimage"
                      style={{ width: "100%", height: "100%" }}
                      src={require('../../../assets/img/solar3.jpeg')}
                    />
                    <div className="carousel-caption">Image</div>
                  </div>
                </React_Bootstrap_Carousel>
              </div>
            </div>
          </div>
        );
    }
}
                
export default RightCom;