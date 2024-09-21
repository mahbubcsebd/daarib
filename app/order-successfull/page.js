import OrderSuccess from '../components/OrderSuccess';
import { getSiteSettings } from '../utils/getSiteSettings';


  export async function generateMetadata() {
      const siteSetting = await getSiteSettings();

      return {
          title: `${siteSetting.data.title} | Order Success Page`,
      };
  }

const OrderSuccessfull = async () => {
    const siteSetting = await getSiteSettings();
  return (
      <div>
          <OrderSuccess title={siteSetting.data.title} />
      </div>
  );
}

export default OrderSuccessfull