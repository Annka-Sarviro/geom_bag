import MobileLogo from '@/layout/Logo/MobileLogo';
import BurgerMenuButton from '../BurgerMenuButton';

const MobileHeader = () => {
  return (
    <div className="container  flex justify-between items-center md:hidden">
      <MobileLogo width={69} height={46} className="block w-[69px] h-[46px]" />

      <BurgerMenuButton />
    </div>
  );
};

export default MobileHeader;
