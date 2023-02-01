import formResponses from '../data/form.json';

function mapFormResults(props) {
  if (props.name === 'gender') {
    switch (props.val) {
      case formResponses[0].a[0]:
        return 1.1;
      case formResponses[0].a[1]:
        return 0.8;
      case formResponses[0].a[2]:
        return 1;
      default:
        return 1;
    }
  }

  if (props.name === 'goal') {
    switch (props.val) {
      case formResponses[1].a[0]:
        return 0.8;
      case formResponses[1].a[1]:
        return 1;
      case formResponses[1].a[2]:
        return 1.1;
      default:
        return 1;
    }
  }

  if (props.name === 'frequency') {
    switch (props.val) {
      case formResponses[5].a[0]:
        return 0.9;
      case formResponses[5].a[1]:
        return 1;
      case formResponses[5].a[2]:
        return 1.1;
      case formResponses[5].a[3]:
        return 1.2;
      default:
        return 1;
    }
  }
  if (props.name === 'activity') {
    switch (props.val) {
      case formResponses[6].a[0]:
        return 0.9;
      case formResponses[6].a[1]:
        return 1;
      case formResponses[6].a[2]:
        return 1.1;
      default:
        return 1;
    }
  }
}

export default mapFormResults;
