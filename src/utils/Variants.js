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

export const fadeInLeftVariantDelay = {
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
      delay: 1,
      
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


export const fadeInTopVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 2,

    }
  }
}
export const fadeInBottomVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 2,

    }
  }
}

export const slideInLeft = {
  hidden: {
    x: '-100vh',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1, 
    transition: {
      type: 'tween',
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    x: '-100vh',
    transition: {
      type: 'tween',
      duration: 0.5,
    }
  }
}