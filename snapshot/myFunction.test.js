const formatUser = require("./myFunction");

test("formats user data correctly", () => {
  const user = { name: "Andrew", age: 35 };
  const result = formatUser(user);

  // 스냅샷 저장
  expect(result).toMatchSnapshot();
});
