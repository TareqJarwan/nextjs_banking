import MobileNavbar from "@/components/mobile-navbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const loggedIn = { firstName: "Tareq", lastName: 'Jarwan' }


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
            </div>
            {children}
        </main>
    );
};

export default RootLayout;