
"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Sidebar } from "./_comonents/sidebar";
import { OrgSidebar } from "./_comonents/org-sidebar";
import { Navbar } from "./_comonents/navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    return (
        <>
            {/* When user is NOT signed in - show content without dashboard layout */}
            <SignedOut>
                <main className="h-full">
                    {children}
                </main>
            </SignedOut>

            {/* When user IS signed in - show full dashboard layout */}
            <SignedIn>
                <main className="h-full">
                    <Sidebar />
                    <div className="pl-[60px] h-full">
                        <div className="flex gap-x-3 h-full">
                            <OrgSidebar />
                            <div className="h-full flex-1">
                                <Navbar />
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </SignedIn>
        </>
    );
};

export default DashboardLayout;