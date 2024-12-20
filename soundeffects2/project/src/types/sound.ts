import { SoundCategory } from '../data/categories';

export interface Sound {
  id: string;
  name: string;
  description: string;
  category: SoundCategory;
  tags: string[];
  url: string;
  imageUrl: string;
}