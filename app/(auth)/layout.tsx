import Image from "next/image";
import { redirect } from "next/navigation";

import { getLoggedInUser } from "@/lib/actions/user.actions";

const AuthLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const loggedInUser = await getLoggedInUser();

    if (loggedInUser) redirect('/');

    return (
        <main className="flex min-h-screen w-full justify-between font-inter">
            {children}
            <div className="auth-asset">
                <div>
                    <Image src="icons/auth-image.svg" alt="Auth Image" width={500} height={500} />
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;