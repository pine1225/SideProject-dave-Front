export function categoryFilter(category: string) {
  let id = "";

  switch (category) {
    case "블루홀 초입":
      id = "1";
      break;
    case "블루홀 중간수역":
      id = "2";
      break;
    case "블루홀 심해":
      id = "3";
      break;
    case "빙하 통로":
      id = "4";
      break;
    case "빙하 지역":
      id = "5";
      break;
    case "열수 분출 구역":
      id = "6";
      break;
    case "해마":
      id = "7";
      break;
  }
  if (id === "") return;

  return id;
}
