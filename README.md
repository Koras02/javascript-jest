# javascript-jest

Jest는 JavaScript 애플리케이션을 위한 간편하고 강력한 테스팅 프레임워크로, 주로 React 애플리케이션의 테스트에 많이 사용

## 주요 특징

1. **간편한 설정**: Jest는 기본적으로 설정이 필요 X, 바로 사용 가능
2. **스냅샷 테스트**: UI 컴포넌트의 렌더링 결과를 저장하고 비교하는 기능을 제공
3. **모의 함수(mock functions)**: 테스트 중에 함수의 동작을 모의할 수 있는 기능 제공
4. **비동기 테스트 지원**: 비동기 코드 테스트를 쉽게 작성
5. **코드 커버리지**: 테스트 코드의 커버리지를 쉽게 측정할 수 있는 기능 제공

## 설치 && 간단한 사용법

Jest를 설치하려면 npm 또는 yarn을 사용합니다.

````bash
// sum.js
npm install --save-dev jest

```javascript
function sum (a,b) {
  return a + b;
}

module.exports = sum;
````

```javascript
// sum.test.js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

테스트를 실행하려면 다음 명령어를 사용해 테스트 할 수 있습니다.

```bash
 npm test && yarn test
```
