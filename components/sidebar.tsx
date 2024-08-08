'use client';

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./footer";

const Sidebar: React.FC<SiderbarProps> = ({
    user
}) => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href='/'
                    className="mb-12 cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src='/icons/logo.svg'
                        alt="Horizon Logo"
                        width={34}
                        height={34}
                        className="size-[24px] max-lg:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                {sidebarLinks.map(item => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            key={item.label}
                            href={item.route}
                            className={cn(
                                'sidebar-link',
                                isActive && 'bg-bank-gradient'
                            )}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn(isActive && 'brightness-[3] invert-0')}
                                />
                            </div>
                            <p className={
                                cn(
                                    'sidebar-label',
                                    isActive && '!text-white'
                                )}
                            >
                                {item.label}
                            </p>

                        </Link>
                    );
                })}
                USER
            </nav>

            <Footer user={user} />
        </section>
    );
}

export default Sidebar;