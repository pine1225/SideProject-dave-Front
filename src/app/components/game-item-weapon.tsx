import { WeaponData } from "@/types";
import Image from "next/image";

export default function GameItemWeapon({ data, message }: WeaponData) {
  const weapon = data;

  return (
    <div>
      {weapon.map((item) => (
        <div key={item.widx}>
          <Image
            src={item.weaponImg}
            alt={item.weaponName}
            width={200}
            height={200}
          />
          <h3>{item.weaponName}</h3>
          <div>
            <div>
              <h4>아이템효과</h4>
              <div>
                <p>대미지</p>
                <p>{item.weaponDamage}</p>
              </div>
              <div>
                <p>사거라</p>
                <p>{item.weaponDistance}</p>
              </div>
              <div>
                <p>탄약수</p>
                <p>{item.weaponNumber}</p>
              </div>
              <div>
                <p>속성</p>
                <p>{item.weaponProperties}</p>
              </div>
            </div>
            <h4>아이템재료</h4>
            <div>
              {item.weaponMaterialName.split("|").map((name, index) => (
                <div key={index}>{name.trim()}</div>
              ))}
            </div>
            <div>
              {item.weaponMaterialNumber.split("|").map((level, index) => (
                <div key={index}>{level.trim()}</div>
              ))}
            </div>
          </div>
          <div>{item.weaponDetail}</div>
        </div>
      ))}
    </div>
  );
}
