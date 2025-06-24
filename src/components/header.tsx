import Image from "next/image";
import Coffee from "~/public/coffee2.jpeg"
import OwnerImage from "~/public/owner.png"
import Link from "next/link";

export default function Header() {
   return (
      <header className="max-w-full flex flex-wrap items-center justify-between">
         <div className="flex items-center gap-8">
            <div className="relative size-60 rounded-full overflow-hidden">
               <Image 
                  src={Coffee} fill 
                  alt="company logo" 
                  className="w-full h-full object-cover" 
                  placeholder="blur"
               />
            </div>
            <div>
               <h1 className="text-2xl md:text-3xl font-medium">Coffee Store</h1>
               <p className="md:text-lg text-muted-foreground -mt-1">Odessa, ON</p>

               <div className="flex items-center gap-4 mt-3 text-muted-foreground">
                  <div className="flex items-center gap-2 [&_svg]:size-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                           <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></path>
                           <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></path>
                           <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></path>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11"></path>
                        </g>
                     </svg>
                     <p>Location (Pick Up): 3 McAlpine St, Toronto, ON, CA, M5R 3T5</p>
                  </div>
                  <Link href="/" className="text-cyan-500">Get Direction</Link>
               </div>
            </div>
         </div>
         <div className="flex flex-col items-center gap-2">
            <div className="relative size-32 rounded-full overflow-hidden border border-border/30">
               <Image 
                  src={OwnerImage} fill 
                  alt="owner profile picture" 
                  className="w-full h-full object-cover" 
                  placeholder="blur"
               />
            </div>
            <p className="text-muted-foreground">Owned by Lola and Coco</p>
         </div>
      </header>
   )
}
