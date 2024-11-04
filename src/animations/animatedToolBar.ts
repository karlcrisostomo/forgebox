import { Variants } from "framer-motion";

//https://easings.net/#easeOutCubic

export const animateToolBar: Variants = {
  initial: {
    opacity: 0,
    width: 0,
    x: -250, //initial x postion of the toolbar component might adjust the x position based on the parent component's position
    transition: {
      duration: 0.25,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  animate: {
    opacity: 1,
    width: "50rem",
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.25,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
