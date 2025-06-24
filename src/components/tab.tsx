import { Suspense } from "react";
import ProductGrid from "./product-grid";
import SideBar from "./side-bar";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ProductsSkeleton from "./product-skeleton";

export default function Tab() {
   return (
      <div className="mt-12">
         <Tabs defaultValue="products">
            <TabsList className="bg-transparent p-0 border-b rounded-none w-full justify-start">
               <TabsTrigger value="products" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary rounded-none flex-none max-w-[250px] h-full w-full">
                  Products
               </TabsTrigger>
               <TabsTrigger value="photos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary rounded-none flex-none max-w-[250px] h-full w-full">
                  Photos
               </TabsTrigger>
            </TabsList>
            <TabsContent value="products">
               <div className="flex items-start gap-6 mt-8">
                  <SideBar />
                  <div className="flex-1 flex flex-col gap-6">
                     <div className="h-9 flex items-center justify-between text-sm text-muted-foreground">
                        <p>Show all products (9)</p>
                        <div className="flex items-center gap-2 cursor-pointer">
                           <Label htmlFor="switch">Show Image Only</Label>
                           <Switch id="switch" />
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer">
                           <Label htmlFor="switch">Sort by:</Label>
                           <Select defaultValue="apple">
                              <SelectTrigger className="border-0 px-2 py-0 shadow-none text-primary font-medium">
                                 <SelectValue defaultValue="apple" placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectGroup>
                                    <SelectItem value="apple">Best Selling</SelectItem>
                                    <SelectItem value="banana">Most Expensive</SelectItem>
                                    <SelectItem value="blueberry">Cheapest</SelectItem>
                                 </SelectGroup>
                              </SelectContent>
                           </Select>
                        </div>
                     </div>
                     <Suspense fallback={<ProductsSkeleton />}>
                        <ProductGrid />
                     </Suspense>
                  </div>
               </div>
            </TabsContent>
            <TabsContent value="photos">
               <div className="flex items-start gap-6 mt-8">
                  <SideBar />
                  photos
               </div>
            </TabsContent>
         </Tabs>

      </div>
   )
}
