// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { OrganizationProfile } from "@clerk/nextjs";
// import { Plus } from "lucide-react";

// export function InviteButton() {
//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <Button variant="outline">
//                     <Plus className="h-4 w-4 mr-2" />
//                     Invite members
//                 </Button>
//             </DialogTrigger>
//             <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">

//                 <div className="w-full h-[600px]">
//                     <OrganizationProfile routing="hash" />

//                 </div>
//             </DialogContent>
//         </Dialog>
//     );
// }
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function InviteButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite members
                </Button>
            </DialogTrigger>

            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                {/* 👇 Required for accessibility */}
                <VisuallyHidden>
                    <DialogTitle>Organization Profile</DialogTitle>
                </VisuallyHidden>

                <OrganizationProfile routing="hash" />
            </DialogContent>
        </Dialog>
    );
}
