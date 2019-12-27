import React, { useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';
import { isBrowser } from '../../utils/isBrowser';
import styles from './styles.module.css';

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

function Fluorish() {
  const [isVisible, setIsVisible] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const isModernMobile = useMemo(() => {
    if (!isBrowser()) {
      return false;
    }
    return window.DeviceOrientationEvent && 'ontouchstart' in window;
  }, []);

  useEffect(() => {
    if (!isModernMobile) {
      document.body.addEventListener('mousemove', onMouseMove);
      document.body.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('deviceorientation', onDeviceMotion);
    };
  }, [isModernMobile]);

  function onMouseMove(event) {
    setIsVisible(true);
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function onMouseLeave() {
    setIsVisible(false);
  }

  function onDeviceMotion(event) {
    setCoordinates({
      y: Math.floor(event.beta) * -10,
      x: Math.floor(event.gamma) * 10,
    });
  }

  function getSquareStyles() {
    const { x, y } = coordinates;
    const { width, height } = getScreenWidth();

    const relX = (x - width / 2) * 0.09;
    const relY = (y - height / 2) * 0.1;
    const relDeg = (x - y) * 0.02;
    return {
      transform: `translate3d(${relX}px,${relY}px, 0px) rotate(${relDeg}deg)`,
    };
  }

  function getCircleStyles() {
    const { x, y } = coordinates;
    const { width, height } = getScreenWidth();

    const relX = (y - height / 2) * 0.04;
    const relY = (x - width / 2) * 0.05;
    return {
      transform: `translate3d(${relX}px,${relY}px, 0px)`,
    };
  }

  function getLineStyles() {
    const { x, y } = coordinates;
    const { width, height } = getScreenWidth();

    const relX = (x - width / 2) * 0.05;
    const relY = (y - height / 2) * 0.05;
    const relDeg = (y - x) * 0.02 - 20;
    return {
      transform: `translate3d(${relX}px,${relY}px, 0px) rotate(${relDeg}deg)`,
    };
  }

  const wrapperClasses = classnames(styles.wrapper, {
    [styles.isVisible]: isVisible || isModernMobile,
  });

  function onWrapperClick() {
    if (!isModernMobile) {
      return;
    }

    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation', onDeviceMotion);
        }
      })
      .catch(console.error);
  }

  return (
    <div className={wrapperClasses} aria-hidden onClick={onWrapperClick}>
      <div className={styles.square} style={getSquareStyles()}>
        <div className={styles.inner} />
      </div>
      <div className={styles.circle} style={getCircleStyles()}>
        <div className={styles.inner} />
      </div>
      <div className={styles.line} style={getLineStyles()}>
        <div className={styles.inner} />
      </div>
    </div>
  );
}

export default Fluorish;
