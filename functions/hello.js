exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: '333*2 = 666 660+6 = 666' }),
  };
};
