import { useEffect, useState } from 'react';

// 코드를 리팩토링할 때 가독성을 유지하는 것은 매우 중요합니다. ManSection 컴포넌트 내부에서 비동기 함수가 async/await와 then으로 혼합되어 사용되고 있습니다. then을 사용할 경우 콜백 지옥에 빠질 위험이 있으므로, 이를 일관되게 수정하는 것이 좋습니다.

// controlled pattern uncontrolled pattern

// seo

// 렉시컬 스코프

// https

// css 명시도 인라인 > id > class > tag

// useState의 초기 값 설정
const Test = ({ value = 'abcd' }: any) => {
  const [amountKR, setAmountKR] = useState(null);

  const array: any = [];
  const test = (arr: any, num: number) => {
    arr.push(num);
    return arr;
  };
  const array2 = test(array, 1);
  console.log(array, array2);
  useEffect(() => {
    if (value === null) {
      setAmountKR(null);
    } else {
      setAmountKR(value.toLocaleString());
    }
  }, [value]);

  return <span>{amountKR}</span>;
};

export default Test;
