import { Google_Sans } from "next/font/google";


const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeaderSection = () => { 
  return (
    <div className={googleSans.className}>
      <h1>HeaderSection</h1>
    </div>
  ) 
};

export default HeaderSection;