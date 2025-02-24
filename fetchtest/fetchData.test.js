const fetchData = require("./fetchData");

test("fetches successfully data from an API", async () => {
  const data = await fetchData();
  expect(data).toBe("data received");
});
