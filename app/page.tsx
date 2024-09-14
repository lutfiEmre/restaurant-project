import Image from "next/image";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import Steakwithtomato from "@/components/Steakwithtomato";
import SpecialDishes from "@/components/SpecialDishes";
import OurExpects from "@/components/OurExpects";
import OurHappyCustomer from "@/components/OurHappyCustomer";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className={'w-full'}>
          <ResponsiveMenu/>
          <Steakwithtomato/>
          <SpecialDishes/>
          <OurExpects/>
          <OurHappyCustomer/>
          <Subscribe/>
          <Footer/>

      </div>
  );
}
