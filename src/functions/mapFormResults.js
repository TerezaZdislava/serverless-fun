function mapFormResults(props) {
  if (props.name === 'gender') {
    switch (props.val) {
      case 'male':
        return 1.5;
      case 'female':
        return 1;
      case 'other':
        return 1.2;
      default:
        return 1.2;
    }
  }

  if (props.name === 'goal') {
    switch (props.val) {
      case 'reduce':
        return 0.9;
      case 'hold':
        return 1;
      case 'gain':
        return 2;
      default:
        return 1;
    }
  }

  if (props.name === 'sport') {
    switch (props.val) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 4;
      default:
        return 2;
    }
  }
  if (props.name === 'job') {
    switch (props.val) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 3;
      default:
        return 2;
    }
  }
}

export default mapFormResults;
