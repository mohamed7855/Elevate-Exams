export interface QuizesRes {
  message: string;
  subjects: Quiz[];
}

export interface QuizesAPIRes extends QuizesRes {
  metadata: Metadata;
}

interface Quiz {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}
