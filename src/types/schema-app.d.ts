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

export type SkillsType = {
  title: string;
  technical: {
    title: string;
    items: string[];
  };
  softSkills: {
    title: string;
    items: string[];
  };
};

export type SkillsCardType = { data: SkillsType };

// ------------------------------------------------

type InstitutionType = {
  title: string;
  description: string;
};

type OtherKnowledgeItems = {
  item: string;
  studying: string;
};

type OtherKnowledgeType = {
  title: string;
  items: OtherKnowledgeItems[];
};

export type EducationType = {
  title: string;
  institutions: InstitutionType[];
  otherKnowledge: OtherKnowledgeType;
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
