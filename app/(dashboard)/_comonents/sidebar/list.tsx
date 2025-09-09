// "use client"
// import { useOrganizationList } from "@clerk/nextjs"

// export const List = () => {
//     const { userMemberships } = useOrganizationList({
//         userMemberships: {
//             infinite: true,
//         },
//     });
//     if (!userMemberships.data?.length) return null;
//     return (
//         <ul className="space-y-4">
//             {userMemberships.data?.map((mem) => (
//                 <p key={mem.organization.name}></p>
//             ))}
//         </ul>
//     )
// }
"use client"
import { useOrganizationList, useOrganization } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

export const List = () => {
    const { organization } = useOrganization();
    const { userMemberships, setActive } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    if (!userMemberships.data?.length) return null;

    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((mem) => {
                const isActive = organization?.id === mem.organization.id;

                return (
                    <li key={mem.organization.id} className="aspect-square">
                        <button
                            onClick={() => {
                                if (setActive) {
                                    setActive({ organization: mem.organization.id });
                                }
                            }}
                            className={cn(
                                "w-full h-full rounded-md flex items-center justify-center text-white text-xs font-semibold transition relative",
                                isActive
                                    ? "bg-white/30 ring-2 ring-white/50"
                                    : "bg-white/10 hover:bg-white/20"
                            )}
                            title={mem.organization.name}
                        >
                            {mem.organization.name.charAt(0).toUpperCase()}

                            {/* Optional: Show organization image if available */}
                            {mem.organization.imageUrl && (
                                <img
                                    src={mem.organization.imageUrl}
                                    alt={mem.organization.name}
                                    className="w-full h-full rounded-md object-cover"
                                />
                            )}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}