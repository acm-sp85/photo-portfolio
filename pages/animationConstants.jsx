let easing = [0.1, 0.1, 0.3, 0.3];
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
};
