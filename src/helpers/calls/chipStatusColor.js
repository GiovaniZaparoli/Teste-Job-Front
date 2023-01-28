const statusChipColor = (status, classes) => {
  switch (status) {
    case 'ringing':
      return classes.ringing
    case 'completed':
      return classes.completed
    case 'no-answer':
      return classes.noAnswer
    default:
      return ''
  }
}

export default statusChipColor
