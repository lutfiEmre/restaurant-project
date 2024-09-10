import Image from "next/image";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import Steakwithtomato from "@/components/Steakwithtomato";
import SpecialDishes from "@/components/SpecialDishes";

export default function Home() {
  return (
      <div className={'w-full'}>
          <ResponsiveMenu/>
          <Steakwithtomato/>
          <SpecialDishes/>
          <div className={'w-full h-[500px]'}></div>
      </div>
  );
}
