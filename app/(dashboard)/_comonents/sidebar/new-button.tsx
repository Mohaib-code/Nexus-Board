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
                            <button className="bg-gray-200 hover:bg-gray-300 h-full w-full rounded-lg flex items-center justify-center transition-all duration-200 group shadow-sm border border-gray-300">
                                <Plus className="text-gray-600 group-hover:text-gray-700 group-hover:scale-110 transition-transform" size={20} />
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