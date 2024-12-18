import { Animation } from "@nativescript/core";

export const fadeIn = (view: any) => {
  return new Animation([{
    target: view,
    opacity: 1,
    duration: 200
  }]);
};

export const fadeOut = (view: any) => {
  return new Animation([{
    target: view,
    opacity: 0,
    duration: 200
  }]);
};

export const scaleUp = (view: any) => {
  return new Animation([{
    target: view,
    scale: { x: 1.1, y: 1.1 },
    duration: 100
  }]);
};