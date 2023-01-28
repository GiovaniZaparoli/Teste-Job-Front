const styles = (theme) => ({
  overFlow: {
    display: 'block',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '150px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '180px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '480px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '440px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '720px',
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

export default styles
