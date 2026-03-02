export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  features: string;
  tecnicas?: string;
  arquitectura?: string;
  optimizacion?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  shortPhrase: string;
  bio: string;
  education: string[];
  pasiones: string[];
  goals: string[];
  email: string;
  location: string;
  profileImage: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}