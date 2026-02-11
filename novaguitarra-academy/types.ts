
export interface Review {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  status: 'pending' | 'approved';
  date: string;
  avatar: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: string;
}

export type ViewState = 'home' | 'experience' | 'admin';
