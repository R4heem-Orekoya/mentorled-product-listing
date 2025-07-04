import { Suspense } from "react";
import ProductGrid from "./product-grid";
import SideBar from "./side-bar";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ProductsSkeleton from "./product-skeleton";
import ShowImageOnlySwitch from "./show-image-only-switch";
import FilterSelect from "./filter-select";
import Search from "./search";

export default function Tab() {
   return (
      <div className="w-full mt-12">
         <Tabs defaultValue="products">
            <TabsList className="bg-transparent p-0 border-b rounded-none w-full justify-start">
               <TabsTrigger value="products" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary rounded-none max-w-[250px] h-full flex-1">
                  Products
               </TabsTrigger>
               <TabsTrigger value="photos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary rounded-none max-w-[250px] h-full flex-1">
                  Photos
               </TabsTrigger>
            </TabsList>
            <TabsContent value="products">
               <div className="flex items-start gap-6 mt-8">
                  <SideBar />
                  <div className="flex-1 flex flex-col gap-6">
                     <div className="md:hidden">
                        <Search />
                     </div>
                     <div className="h-9 flex flex-wrap items-center justify-between text-sm text-muted-foreground">
                        <p className="hidden sm:block">All products</p>

                        <ShowImageOnlySwitch />

                        <div className="flex items-center gap-2">
                           <Label className="cursor-pointer">Sort by:</Label>
                           <FilterSelect />
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
