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
        <ul className="space-y-3">
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
                                "w-full h-full rounded-lg flex items-center justify-center text-white text-sm font-semibold transition-all duration-200 relative overflow-hidden shadow-sm",
                                isActive
                                    ? "ring-2 ring-blue-500 ring-offset-2 shadow-md scale-105"
                                    : "hover:scale-105 shadow-md"
                            )}
                            style={{
                                background: mem.organization.imageUrl
                                    ? 'transparent'
                                    : `linear-gradient(135deg, ${getOrgColor(mem.organization.name)}, ${getOrgColorSecondary(mem.organization.name)})`
                            }}
                            title={mem.organization.name}
                        >
                            {mem.organization.imageUrl ? (
                                <img
                                    src={mem.organization.imageUrl}
                                    alt={mem.organization.name}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                            ) : (
                                <span className="text-white font-bold text-lg">
                                    {mem.organization.name.charAt(0).toUpperCase()}
                                </span>
                            )}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

// Helper functions to generate consistent colors for organizations
function getOrgColor(name: string): string {
    const colors = [
        '#8B5CF6', // Purple
        '#10B981', // Emerald  
        '#F59E0B', // Amber
        '#EF4444', // Red
        '#3B82F6', // Blue
        '#8B5A2B', // Brown
        '#EC4899', // Pink
        '#6366F1', // Indigo
    ];

    const hash = name.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0);

    return colors[Math.abs(hash) % colors.length];
}

function getOrgColorSecondary(name: string): string {
    const colors = [
        '#A78BFA', // Light Purple
        '#34D399', // Light Emerald
        '#FBBF24', // Light Amber
        '#F87171', // Light Red
        '#60A5FA', // Light Blue
        '#A3845A', // Light Brown
        '#F472B6', // Light Pink
        '#818CF8', // Light Indigo
    ];

    const hash = name.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0);

    return colors[Math.abs(hash) % colors.length];
}