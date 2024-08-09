import MobileNavbar from "@/components/mobile-navbar";
import Sidebar from "@/components/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) redirect('/sign-in');

    return (
        <main className="flex w-full h-screen font-inter">
            <Sidebar user={loggedIn} />

            <div className="size-full flex flex-col ">
                <div className="root-layout">
                    <Image
                        src='/icons/logo.svg'
                        alt="logo"
                        width={30}
                        height={30}
                    />
                    <div>
                        <MobileNavbar user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
};

export default RootLayout;