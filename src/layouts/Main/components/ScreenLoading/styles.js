const styles = (theme) => ({
  root: {
    transition: 'all 300ms ease',
    transitionDelay: 1500,
    position: 'relative',
    zIndex: 9999,
  },
  rootLoaded: {
    opacity: 0,
    visibility: 'hidden',
    zIndex: -1,
  },
  bg: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    height: '100%',
    width: '100%',
    transform: 'translate(0,0)',
    transition: 'all 500ms ease',
    transitionDelay: 1000,
  },
  bgLoaded: {
    transform: 'translate(0,calc(-100% + 60px))',
  },
  logo: {
    width: '100px',
    height: 'auto',
    position: 'fixed',
    left: 0,
    top: 0,
    transition: 'all 1s ease',
    transform: 'translate(calc(50vw - 70px), calc(50vh - 36px)) scale(1.5)',
    [theme.breakpoints.down('sm')]: {
      width: 90,
      height: 25,
      transform: 'translate(calc(50vw - 45px), calc(50vh - 12px)) scale(1.5)',
    },
  },
  logoLoaded: {
    transform: 'translate(24px, 12px) scale(1)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(-10px, 12px) scale(0.5)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(-10px, 12px) scale(0.5)',
    },
  },
})

export default styles
