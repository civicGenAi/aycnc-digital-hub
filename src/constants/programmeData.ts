export interface ProgrammeModule {
  num: string;
  title: string;
  duration: string;
  mode: string;
  body: string;
  area: string; // grid area
}

export const programmeModules: ProgrammeModule[] = [
  { num: "01", title: "Foundations of Climate Governance", duration: "1wk Residential", mode: "Residential", body: "UNFCCC, Kyoto, Paris, Rio, IPCC, Africa position, CBDR-RC.", area: "m1" },
  { num: "02", title: "UNFCCC Architecture", duration: "1.5wks Residential", mode: "Residential", body: "COP/SBSTA/SBI structure, Rules of Procedure, AGN.", area: "m2" },
  { num: "03", title: "Climate Science", duration: "1wk Hybrid", mode: "Hybrid", body: "IPCC AR6, Africa projections, science to negotiating positions.", area: "m3" },
  { num: "04", title: "Negotiation and Diplomacy", duration: "2wks Residential", mode: "Residential", body: "Coalition-building, consensus formation, chairing, language of compromise.", area: "m4" },
  { num: "05", title: "Document Drafting", duration: "2wks Residential", mode: "Residential", body: "Brackets, agreed text, position papers, COP decision drafting simulation.", area: "m5" },
  { num: "06", title: "Africa Priorities", duration: "1wk Hybrid", mode: "Hybrid", body: "Loss and Damage, Adaptation Finance, Just Transition, NCQG, NDC, Africa's red lines.", area: "m6" },
  { num: "07", title: "Policy Advocacy", duration: "0.5wks Hybrid", mode: "Hybrid", body: "Media, Africa Pavilion, NGO engagement, digital advocacy.", area: "m7" },
  { num: "08", title: "Research and Mentorship", duration: "Year-round", mode: "Continuous", body: "1:1 AGN mentorship, SB session shadowing, AYCNC Research Journal.", area: "m8" },
];
