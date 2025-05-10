export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface FAQ {
  question: string;
  answer: string;
}