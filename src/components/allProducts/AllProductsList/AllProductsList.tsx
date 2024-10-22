import { ProductCardProp } from '@/app/page.props';
import OrderForm from '@/components/OrderForm';
import FullProductCardDesktop from '@/components/common/FullProductCardDesktop';
import FullProductCardMobile from '@/components/common/FullProductCardMobile';
import Modal from '@/components/common/Modal';
import ProductCard from '@/components/common/ProductCard/';
import { AllProductsListProps } from './AllProductsList.props';

const AllProductsList = ({ data, isModalOpen, orderModal, item }: AllProductsListProps) => {
  return (
    <>
      <ul className="smOnly:flex smOnly:flex-col sm:justify-center md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 justify-center mt-12 md:mt-10 mb-10 md:mb-14">
        {data.map((item: ProductCardProp, ind: number) => {
          return <ProductCard key={ind} item={item} />;
        })}
      </ul>

      {isModalOpen && (
        <Modal>
          {!orderModal && item && (
            <>
              <FullProductCardMobile data={item} />
              <FullProductCardDesktop data={item} />
            </>
          )}

          {orderModal && item && <OrderForm item={item} />}
        </Modal>
      )}
    </>
  );
};

export default AllProductsList;
