import { MarincaData } from "@/types";
import style from "./game-item.module.css";
import Image from "next/image";

export default function GameItem({
  data,
  count,
  message,
  category,
}: MarincaData) {
  return (
    <div className={style.main_content}>
      {data.map((item) => (
        <div key={item.idx} className={style.item_container}>
          <div>
            <Image
              src={item.marineImg}
              alt={item.marineName}
              width={250}
              height={250}
            />
          </div>
          <div className={style.data_container}>
            <h3>{item.marineName}</h3>
            <div className={style.detail_container}>
              <ul className={style.list_container}>
                <li>분류</li>
                <li>{item.marineCategory}</li>
              </ul>
              <ul className={style.list_container}>
                <li>활동시간</li>
                <li>{item.marineActive}</li>
              </ul>
            </div>
            <div className={style.detail_main}>{item.marineDetail}</div>
            <h4>능력치</h4>
            <table className={style.ability}>
              <thead>
                <tr>
                  <th>크기</th>
                  <th>획득 장소</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.marineSize}</td>
                  <td>{item.marineLocation}</td>
                  <td>{item.marineRank}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
