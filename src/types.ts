export interface AvatarState {
  gender: "male" | "female";
  skin: string;
  eyes: string;
  mouth: string;
  hair: string;
  hairStyle: string;
  faceShape: "round" | "oval" | "square" | "heart";
  accessories: string[];
  backgroundColor: string;
}

export interface AvatarFeature {
  id: string;
  name: string;
  options: string[];
}
