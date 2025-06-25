import CategoryFilter from "./category-filter";
import ClearAllBtn from "./clear-all-btn";
import Search from "./search";

export default function SideBar() {
   return (
      <div className="sticky hidden md:block top-4 w-full max-w-[250px] space-y-4 aspect-square">
         <Search />
         
         <ClearAllBtn />
         
         <div className="mt-6">
            <h3 className="font-medium mb-5">Categories</h3>
            <CategoryFilter />
         </div>
      </div>
   )
}