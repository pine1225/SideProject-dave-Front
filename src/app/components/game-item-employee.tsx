import { EmployeeData } from "@/types";
import Image from "next/image";
import style from "./game-item-employee.module.css";

export default function GameItemEmployee({ data, message }: EmployeeData) {
  return (
    <div className={style.container}>
      {data.map((item) => (
        <div key={item.eidx} className={style.item_container}>
          <div className={style.item_container_img}>
            <Image
              src={item.employeeImg}
              alt={item.employeeName}
              width={200}
              height={200}
            />
            <div className={style.item_detail}>
              <div>{item.employeeName}</div>
              <div>{item.employeeDetail}</div>
            </div>
          </div>
          <div className={style.bottom_container}>
            <ul className={style.bottom_skils}>
              <li>요리</li>
              <li>서빙</li>
              <li>조달</li>
              <li>매력</li>
            </ul>
            <ul className={style.bottom_skils}>
              <li>{item.employeeEffectCook}</li>
              <li>{item.employeeEffectServing}</li>
              <li>{item.employeeEffectObtain}</li>
              <li>{item.employeeEffectAttraction}</li>
            </ul>
            <div className={style.bottom_add}>
              <div style={{ marginTop: "20px", fontWeight: "bold" }}>
                추가 속성
              </div>
              <div>
                {item.employeeSkils.split("\n\n").map((item, index) => (
                  <p key={index}>{item.trim()}</p>
                ))}
              </div>
              <div>
                {item.employeeRemoved.split("\n").map((item, index) => (
                  <p key={index}>{item.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
