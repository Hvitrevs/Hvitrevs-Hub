export const fadeInLeftVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 2,
    }
  }
}

export const fadeInRightVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 2,
    }
  }
}

export const rotatingVariant ={
  animate: {
    rotate: [0, 360], 
      transition: {
        duration: 5000, 
        loop: Infinity, 
        ease: "linear", 
      },
  }
  }
