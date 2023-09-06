import MaterialsCardDesktop from '@/components/common/MaterialsCardDesktop';
import Slider from 'react-slick';

const MaterialsList = ({ data }: any) => {
  const settings = {
    infinite: true,
    speed: 1000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {data.map((item: any, ind: number) => {
        return <MaterialsCardDesktop item={item} key={ind} />;
      })}
    </Slider>
  );
};

export default MaterialsList;
