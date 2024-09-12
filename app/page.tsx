import Image from "next/image";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import Steakwithtomato from "@/components/Steakwithtomato";
import SpecialDishes from "@/components/SpecialDishes";
import OurExpects from "@/components/OurExpects";
import OurHappyCustomer from "@/components/OurHappyCustomer";

export default function Home() {
  return (
      <div className={'w-full'}>
          <ResponsiveMenu/>
          <Steakwithtomato/>
          <SpecialDishes/>
          <OurExpects/>
          <OurHappyCustomer/>
          <div className={'w-full h-[500px]'}></div>
      </div>
  );
}
