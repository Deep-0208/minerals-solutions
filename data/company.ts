import type { CompanyProfile } from '../types/company';

export const company: CompanyProfile = {
  legalName: 'Minerals Solutions',
  tradeName: 'Minerals Solutions',
  proprietor: 'Mr. Vipulbhai A. Prajapati',
  ceo: 'Mr. P Amrutlal',
  contactPerson: 'Mr. Vipulbhai A. Prajapati',
  foundingYear: 2023,
  commencementDate: '2023-01-01',
  udyamRegistration: 'UDYAM-GJ-09-0021428',
  gstin: '24AUSPP9555F1ZZ',
  banker: 'Axis Bank',
  telephones: ['+91 63524 53050', '+91 91061 63058'],
  indiamartPns: '+91-8047626632',
  whatsapp: {
    number: '+916352453050',
    prefill: 'Hello Minerals Solutions, I would like to enquire about your industrial rotary dryers and mineral processing plants.',
  },
  email: 'sales@mineralssolution.in',
  alternateEmails: ['mineralssolutions76@gmail.com', 'mineralssolution76@gmail.com'],
  siteUrl: 'https://mineralssolution.in',
  address: {
    streetAddress: '10, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Ta. Dahegam',
    locality: 'Dahegam, Gandhinagar',
    metroDistrict: 'Ahmedabad Industrial Corridor',
    region: 'GJ',
    regionName: 'Gujarat',
    postalCode: '382330',
    country: 'IN',
    countryName: 'India',
  },
  // Zak GIDC industrial area coordinates
  geo: { lat: 23.1672, lng: 72.8125 },
  hours: ['Mo-Sa 09:00-19:00'],
  sameAs: [
    'https://www.indiamart.com/mineralssolutions-ahmedabad/',
  ],
};
