export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Web Design' | 'Marketing' | 'Marketing Digital' | 'Mídias Sociais';
  imageUrl: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}