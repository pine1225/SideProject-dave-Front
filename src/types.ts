export interface MarincaItem {
  idx: number;
  marineName: string;
  marineCategory: string;
  marineActive: string;
  marineImg: string;
  marineDetail: string;
  marineSize: string;
  marineLocation: string;
  marineRank: string;
  marineReality: string | null;
}

export interface MarincaData {
  data: MarincaItem[];
  count: number | null;
  message: string;
  category: string | null;
}

export interface WeaponItem {
  weaponName: string;
  weaponCategory: string;
  weaponImg: string;
  weaponDetail: string;
  weaponDamage: string;
  weaponDistance: string;
  weaponNumber: string;
  weaponProperties: string;
  weaponMaterialName: string;
  weaponMaterialNumber: string;
  widx: number;
}

export interface WeaponData {
  data: WeaponItem[];
  message: string;
}
