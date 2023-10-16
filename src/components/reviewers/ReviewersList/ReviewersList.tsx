'use client';
import { SampleNextArrow } from '@/components/slider/SampleNextArrow';
import { SamplePrevArrow } from '@/components/slider/SamplePrevArrow';
import { ReviewrsCardProps } from '@/sections/Reviewers/Reviewers.props';
import Slider from 'react-slick';
import ReviewersCard from '../ReviewersCard';
import { ReviewersListProps } from './ReviewersList.props';

const ReviewersList = ({ data }: ReviewersListProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((item: ReviewrsCardProps, ind: number) => (
        <ReviewersCard item={item} key={ind} />
      ))}
    </Slider>
  );
};

export default ReviewersList;
