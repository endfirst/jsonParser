export async function onRequestGet(context) {
  // 화면에 돌려줄 데이터를 준비합니다 (상자 안에 내용물 넣기)
  const menuList = [
    { id: 1, name: "아메리카노", price: 3000 },
    { id: 2, name: "카페라떼", price: 3500 },
    { id: 3, name: "바닐라라떼", price: 4000 }
  ];

  // Response 상자에 담아서(JSON 형태로 변환해서) 보냅니다.
  return new Response(JSON.stringify(menuList), {
    headers: { "Content-Type": "application/json;charset=UTF-8" }
  });
}