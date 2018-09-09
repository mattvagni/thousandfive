import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

function getScreenWidth() {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

class Fluorish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      x: 0,
      y: 0,
    };

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
      window.addEventListener('deviceorientation', this.onDeviceMotion);
    } else {
      document.body.addEventListener('mousemove', this.onMouseMove);
      document.body.addEventListener('mouseleave', this.onMouseLeave);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.onDeviceMotion);
    document.body.removeEventListener('mousemove', this.onMouseMove);
    document.body.removeEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
      isVisible: true,
    });
  }

  onMouseLeave() {
    this.setState({ isVisible: false });
  }

  onDeviceMotion(event) {
    this.setState({
      y: Math.floor(event.beta) * -10,
      x: Math.floor(event.gamma) * 10,
      isVisible: true,
      isMobile: true,
    });
  }

  getSquareStyles() {
    const { x, y } = this.state;
    const { width, height } = getScreenWidth();

    const relX = (x - width / 2) * 0.09;
    const relY = (y - height / 2) * 0.1;
    const relDeg = (x - y) * 0.02;
    return {
      transform: `translate3d(${relX}px,${relY}px, 0px) rotate(${relDeg}deg)`,
    };
  }

  getCircleStyles() {
    const { x, y } = this.state;
    const { width, height } = getScreenWidth();

    const relX = (y - height / 2) * 0.04;
    const relY = (x - width / 2) * 0.05;
    return {
      transform: `translate3d(${relX}px,${relY}px, 0px)`,
    };
  }

  getLineStyles() {
    const { x, y } = this.state;
    const { width, height } = getScreenWidth();

    const relX = (x - width / 2) * 0.05;
    const relY = (y - height / 2) * 0.05;
    const relDeg = (y - x) * 0.02 - 20;
    return {
      transform: `translate3d(${relX}px,${relY}px, 0px) rotate(${relDeg}deg)`,
    };
  }

  render() {
    const wrapperClasses = classnames(styles.wrapper, {
      [styles.isVisible]: this.state.isVisible,
      [styles.isMobile]: this.state.isMobile,
    });

    return (
      <div className={wrapperClasses}>
        <div className={styles.square} style={this.getSquareStyles()}>
          <div className={styles.inner} />
        </div>
        <div className={styles.circle} style={this.getCircleStyles()}>
          <div className={styles.inner} />
        </div>
        <div className={styles.line} style={this.getLineStyles()}>
          <div className={styles.inner} />
        </div>
      </div>
    );
  }
}

export default Fluorish;
