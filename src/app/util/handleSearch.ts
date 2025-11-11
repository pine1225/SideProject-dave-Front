import { MarincaItem } from "@/types";
import { categoryFilter } from "./categoryFilter";

export function handleClick(items: MarincaItem[], detail: MarincaItem) {
  const id = categoryFilter(detail.marineCategory);

  const filteredPage = items.filter(
    (x) => x.marineCategory === detail.marineCategory
  );

  const ITEMS_PER_PAGE = 7;
  const itemIndex = filteredPage.findIndex((x) => x.idx === detail.idx);
  const pageNum = Math.floor(itemIndex / ITEMS_PER_PAGE) + 1;

  // console.log(filteredPage);
  // console.log(itemIndex);
  // console.log(pageNum);

  // router.push(`/data/${id}`);
  //   router.push(
  //     `/data/${id}?page=${pageNum}&item=${itemIndex}&idx=${detail.idx}`
  //   );

  return `/data/${id}?page=${pageNum}&item=${itemIndex}&idx=${detail.idx}`;
}
