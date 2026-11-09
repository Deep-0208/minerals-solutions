export interface CompanyAddress {
  streetAddress: string;
  locality: string;
  metroDistrict: string; // Strategic: 'Ahmedabad' catchment for GIDC corridor
  region: string; // ISO 3166-2 code: 'GJ'
  regionName: string; // 'Gujarat'
  postalCode: string;
  country: string; // 'IN'
  countryName: string; // 'India'
}

export interface CompanyProfile {
  legalName: string;
  tradeName: string;
  proprietor: string;
  ceo: string;
  contactPerson: string;
  foundingYear: number;
  commencementDate: string;
  udyamRegistration: string;
  gstin: string;
  banker: string;
  telephones: readonly string[];
  indiamartPns: string;
  whatsapp: {
    number: string;
    prefill: string;
  };
  email: string;
  alternateEmails: readonly string[];
  siteUrl: string;
  address: CompanyAddress;
  geo: {
    lat: number;
    lng: number;
  };
  hours: readonly string[];
  sameAs: readonly string[];
}
