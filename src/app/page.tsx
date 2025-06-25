import TopImage from "~/public/top-image.png"
import Image from "next/image";
import Header from "@/components/header";
import Tab from "@/components/tab";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="relative w-screen h-[200px]">
        <Image 
          src={TopImage} 
          width={1920} height={285} 
          alt="top image" className="w-full h-full object-cover"
          placeholder="blur"
        />
      </div>
      
      <div className="w-[min(1100px,90%)] mx-auto py-12">
        <Header />
        <Suspense>
          <Tab />
        </Suspense>
      </div>
    </main>
  )
}
