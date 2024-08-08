import { logoutAccount } from "@/lib/actions/user.actions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Footer: React.FC<FooterProps> = ({
    user,
    type = 'desktop'
}) => {
    const router = useRouter();
    
    const handleLogout = async () => {
        const loggedOut = await logoutAccount();

        if (loggedOut) router.push('/sign-in');
    }

    return (
        <footer className="footer">
            <div className={cn('footer_name', type === 'mobile' && 'footer_name-mobile')}>
                <p className="text-xl font-bold text-gray-700">
                    {user?.firstName?.[0]}
                </p>
            </div>

            <div className={cn('footer_email', type === 'mobile' && 'footer_email-mobile')}>
                <h1 className="text-14 truncate text-gray-700 font-semibold">
                    {user?.name}
                </h1>
                <p className="text-14 truncate font-normal text-gray-600">
                    {user?.email}
                </p>
            </div>

            <div className="footer_image" onClick={handleLogout}>
                <Image src="icons/logout.svg" fill alt="logout" />
            </div>
        </footer>
    );
}

export default Footer;