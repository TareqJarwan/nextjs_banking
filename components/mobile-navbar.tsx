'use client';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./footer";

const MobileNavbar: React.FC<MobileNavProps> = ({
    user
}) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/icons/hamburger.svg'
                        alt="menu icon"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link
                        href='/'
                        className="cursor-pointer flex items-center gap-1 px-4"
                    >
                        <Image
                            src='/icons/logo.svg'
                            alt="Horizon Logo"
                            width={34}
                            height={34}
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>

                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="h-full flex flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map(item => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                                    return (
                                        <SheetClose
                                            asChild
                                            key={item.label}
                                        >
                                            <Link
                                                href={item.route}
                                                className={cn(
                                                    'mobilenav-sheet_close w-full',
                                                    isActive && 'bg-bank-gradient'
                                                )}
                                            >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn(isActive && 'brightness-[3] invert-0')}
                                                />
                                                <p className={
                                                    cn(
                                                        'text-16 font-semibold text-black-2',
                                                        isActive && '!text-white'
                                                    )}
                                                >
                                                    {item.label}
                                                </p>

                                            </Link>
                                        </SheetClose>
                                    );
                                })}

                                USER
                            </nav>
                        </SheetClose>

                        <Footer user={user} type="mobile" />
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
}

export default MobileNavbar;