"use client"

import { useParams } from "@/hooks/use-params"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"
import { useShowImageOnly } from "@/hooks/use-show-image-only"

export default function ShowImageOnlySwitch() {
   const { active } = useShowImageOnly()
   const { setParams } = useParams()
   
   return (
      <div className="flex items-center gap-2">
         <Label htmlFor="switch" className="cursor-pointer">Show Image Only</Label>
         <Switch
            onCheckedChange={() => setParams("showimageonly", String(!active))}
            defaultChecked={active}
            id="switch" className="cursor-pointer" 
         />
      </div>
   )
}