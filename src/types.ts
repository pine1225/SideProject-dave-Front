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
  count: number;
  message: string;
  category: string;
}
