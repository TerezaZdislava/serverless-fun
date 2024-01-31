function mapFormResults(props) {
  if (props.name === 'goal') {
    switch (props.val) {
      case 'reduce':
        return -0.2;
      case 'hold':
        return 0;
      case 'gain':
        return 0.2;
      default:
        return 0;
    }
  }

  if (props.name === 'sport') {
    switch (props.val) {
      case 0:
        return 0;
      case 1:
        return 0.2;
      case 2:
        return 0.3;
      case 3:
        return 0.4;
      default:
        return 0;
    }
  }
  if (props.name === 'job') {
    switch (props.val) {
      case 0:
        return 0;
      case 1:
        return 0.2;
      case 2:
        return 0.4;
      default:
        return 0;
    }
  }
}

export default mapFormResults;
