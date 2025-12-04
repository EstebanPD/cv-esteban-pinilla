export type ContactInformationType = {
  email: string;
  email2: string;
  phone: string;
  jobTitle: string;
  linkedin: {
    text: string;
    url: string;
  };
};

// ------------------------------------------------

export type ExperienceCardType = {
  jobTitle: string;
  company: string;
  dates: string;
  experience: string[];
  remote: string;
};

// ------------------------------------------------

type technicalSkills = {
  title: string;
  items: {
    title: string;
    items: string[];
  }[];
};

type softSkills = {
  title: string;
  items: string[];
};

export type TSkills = {
  title: string;
  technicalSkills: technicalSkills;
  softSkills?: softSkills;
};

export type SkillsCardType = { data: softSkills };

// ------------------------------------------------

type InstitutionType = {
  title: string;
  description: string;
};

export type EducationType = {
  title: string;
  institutions: InstitutionType[];
  otherKnowledge: {
    title: string;
    items: string[];
  };
};

export type EducationCardType = { data: EducationType };

// ------------------------------------------------

export type ReferenceItems = {
  name: string;
  jobTitle: string;
  phone: string;
};

export type ReferenceType = {
  title: string;
  reference: ReferenceItems[];
};

export type ReferencesCardType = { data: ReferenceType };
