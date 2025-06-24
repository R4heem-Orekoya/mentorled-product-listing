import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export default function SideBar() {
   return (
      <div className="w-full max-w-[250px] space-y-4 aspect-square">
         <div className="relative">
            <Input className="ps-9 bg-secondary border-0" placeholder="Search" />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
               <Search size={16} aria-hidden="true" />
            </div>
         </div>
         <button className="text-sm text-cyan-500 hover:text-cyan-400 transition cursor-pointer">
            Clear all
         </button>
         <div className="mt-6">
            <h3 className="font-medium mb-5">Categories</h3>
            <div className="space-y-3 text-muted-foreground">
               <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Baked Goods (8)</Label>
               </div>
               <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Coffee (2)</Label>
               </div>
            </div>
         </div>
         <div className="mt-10">
            <h3 className="font-medium mb-5">Dietary</h3>
            <div className="space-y-3 text-muted-foreground">
               <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Eco Friendly (2)</Label>
               </div>
               <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Glutten Free (4)</Label>
               </div>
               <div className="flex items-center gap-2">
                  <Checkbox />
                  <Label>Nut Free (7)</Label>
               </div>
            </div>
         </div>
      </div>
   )
}
