export interface TechnicalSpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface EquipmentSpecification {
  modelName: string;
  category: string;
  indicativePrice?: string;
  capacity?: string;
  powerRequirement?: string;
  bodyMaterial?: string;
  operatingTemp?: string;
  dimensions?: string;
  keySpecs: readonly TechnicalSpecItem[];
  primaryApplications: readonly string[];
  visualAssetSlug: string;
}

