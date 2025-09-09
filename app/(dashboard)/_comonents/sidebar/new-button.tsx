// "use client";
// import { Plus } from "lucide-react";
// import { CreateOrganization } from "@clerk/nextjs";

// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// export const NewButton = () => {
//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <div className="aspect-square">
//                     <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
//                         <Plus className="text-white"></Plus>
//                     </button>
//                 </div>
//             </DialogTrigger>
//             <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
//                 <CreateOrganization></CreateOrganization>
//             </DialogContent>
//         </Dialog>
//     )
// }
"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const NewButton = () => {
    return (
        <Dialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <div className="aspect-square">
                            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition group">
                                <Plus className="text-white group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={18}>
                    <p>Create Organization</p>
                </TooltipContent>
            </Tooltip>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization
                    afterCreateOrganizationUrl="/"
                />
            </DialogContent>
        </Dialog>
    )
}
