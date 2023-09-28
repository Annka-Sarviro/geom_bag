export interface ReviewrsCardProps {
  id: string;
  link?: string;
  name: string;
  text: string;
  product: {
    name: string;
  };
}

export interface ReviewersProps {
  data: ReviewrsCardProps[];
}
