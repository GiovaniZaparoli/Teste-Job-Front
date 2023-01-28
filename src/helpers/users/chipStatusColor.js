const statusChipColor = (status, classes) => {
  switch (status) {
    case 'online':
      return classes.onlineChip
    case 'offline':
      return classes.offlineChip
    case 'on call':
      return classes.onCallChip
    default:
      return ''
  }
}

export default statusChipColor
