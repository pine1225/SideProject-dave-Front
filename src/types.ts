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

export interface CookmenuItem {
  cookName: string;
  cookCategory: string;
  cookImg: string;
  cookDetail: string;
  cookMaterialName: string;
  cookMaterialNumber: string;
  cidx: number;
}

export interface CookmenuData {
  data: CookmenuItem[];
  message: string;
}

export interface EmployeeItem {
  employeeName: string;
  employeeImg: string;
  employeeDetail: string;
  employeeEffectCook: string;
  employeeEffectServing: string;
  employeeEffectObtain: string;
  employeeEffectAttraction: string;
  employeeSkils: string;
  employeeRemoved: string;
  eidx: number;
}

export interface EmployeeData {
  data: EmployeeItem[];
  message: string;
}

export interface FarmItem {
  farmName: string;
  farmCategory: string;
  farmImg: string;
  farmDetail: string;
  fidx: number;
}

export interface FarmData {
  data: FarmItem[];
  message: string;
}

export interface MaterialItem {
  materialName: string;
  materialCategory: string;
  materialImg: string;
  materialDetail: string;
  materialMenu: string;
  midx: number;
}

export interface MaterialData {
  data: MaterialItem[];
  message: string;
}

export interface MusicItem {
  musicName: string;
  musicTrack: string;
  musicComposer: string;
  musicImg: string;
  musicUrl: string;
  midx: number;
}

export interface MusicData {
  data: MusicItem[];
  message: string;
}

export interface TailsmanItem {
  talismanName: string;
  talismanCategory: string;
  talismanImg: string;
  talismanDetail: string;
  tidx: number;
}

export interface TailsmanData {
  data: TailsmanItem[];
  message: string;
}
