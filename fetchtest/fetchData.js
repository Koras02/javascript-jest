const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("data received");
    }, 1000);
  });

module.exports = fetchData;
