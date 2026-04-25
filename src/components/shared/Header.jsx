import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center flex-col gap-2 pt-10 pb-8">
        <figure className="w-64 md:w-80 lg:w-96">
          <Image
            src={logoImg}
            alt="The Dragon News Logo"
            priority
            className="w-full h-auto"
          />
        </figure>
        <p className="text-gray-400">Journalism Without Fear or Favour</p>
        <p className="text-gray-600">
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
