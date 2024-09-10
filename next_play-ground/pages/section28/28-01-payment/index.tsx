declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init('imp31236121');

    IMP.request_pay(
      {
        pg: 'nice',
        pay_method: 'card',
        // merchant_uid: `payment-${crypto.randomUUID()}`, // 주문 고유 번호
        name: '마우스',
        amount: 100,
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
        m_redirect_url: 'http://localhost:3000/section28/28-01-payment', // 모바일에서는 결제시, 페이지 주소가 바뀜. 따라서, 결제 끝나고 돌아갈 주소 입력해야함
      },
      function (response: any) {
        console.log(response);
        // console.log(response.success); // 성공여부

        // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
        // createPointTransactionOfLoading

        // 결제 종료 시 호출되는 콜백 함수
        // response.imp_uid 값으로 결제 단건조회 API를 호출하여 결제 결과를 확인하고,
        // 결제 결과를 처리하는 로직을 작성합니다.
      }
    );
  };
  return (
    <>
      {/* <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script> */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제하기</button>;
    </>
  );
}
// imp31236121;
