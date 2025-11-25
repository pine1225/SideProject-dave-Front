import { EmployeeData } from "@/types";
import Image from "next/image";

export default function GameItemEmployee({ data, message }: EmployeeData) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.eidx}>
          <div>
            <Image
              src={item.employeeImg}
              alt={item.employeeName}
              width={200}
              height={200}
            />
            <div>{item.employeeName}</div>
            <div>{item.employeeDetail}</div>
          </div>
          <div>
            <ul>
              <li>요리</li>
              <li>서빙</li>
              <li>조달</li>
              <li>매력</li>
            </ul>
            <ul>
              <li>{item.employeeEffectCook}</li>
              <li>{item.employeeEffectServing}</li>
              <li>{item.employeeEffectObtain}</li>
              <li>{item.employeeEffectAttraction}</li>
            </ul>
            <div>
              <div>추가 속성</div>
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
