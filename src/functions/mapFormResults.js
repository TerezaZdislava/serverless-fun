function mapFormResults(props) {
  if (props.name === 'gender') {
    switch (props.val) {
      case 'male':
        return 1.1;
      case 'female':
        return 0.8;
      case 'other':
        return 1;
      default:
        return 1;
    }
  }

  if (props.name === 'goal') {
    switch (props.val) {
      case 'reduce':
        return 0.8;
      case 'hold':
        return 1;
      case 'gain':
        return 1.1;
      default:
        return 1;
    }
  }

  if (props.name === 'sport') {
    switch (props.val) {
      case 0:
        return 0.9;
      case 1:
        return 1;
      case 2:
        return 1.1;
      case 3:
        return 1.2;
      default:
        return 1;
    }
  }
  if (props.name === 'job') {
    switch (props.val) {
      case 0:
        return 0.9;
      case 1:
        return 1;
      case 2:
        return 1.1;
      default:
        return 1;
    }
  }
}

export default mapFormResults;
