// 누군가 내 사이트/hello 주소로 들어오면 이 행동을 해라!
export async function onRequest() {
  
  // 손님에게 돌려줄 말(데이터)을 준비합니다.
  return new Response("안녕하세요! 주방에서 보내는 메시지입니다.");
  
}