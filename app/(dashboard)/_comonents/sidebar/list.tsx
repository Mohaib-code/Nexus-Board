"use client"
import { useOrganizationList } from "@clerk/nextjs"

export const List = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infnite: true,
        },
    });
    if (!userMemberships.data?.length) return null;
    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((mem) => (
                <p key={mem.organization.name}></p>
            ))}
        </ul>
    )
}