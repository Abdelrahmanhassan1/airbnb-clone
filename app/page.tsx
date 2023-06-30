import Image from "next/image";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function Home() {
  return <div className="font.classname">Hello</div>;
}
