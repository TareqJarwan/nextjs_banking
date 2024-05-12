import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BankCard: React.FC<CreditCardProps> = ({
    account,
    userName,
    showBalance = true
}) => {
    return (
        <div className="flex flex-col">
            <Link href='/' className="bank-card">
                <div className="bank-card_content">
                    <div>
                        <h1 className="text-16 font-semibold text-white">
                            {account.name || userName}
                        </h1>
                        <p className="font-ibm-plex-serif font-black text-white">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h1 className="text-12 font-semibold text-white uppercase">
                                {userName}
                            </h1>
                            <h2 className="text-12 font-semibold text-white uppercase">
                                ●● / ●●
                            </h2>
                        </div>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">
                            ●●●● ●●●● ●●●● <span className="text-16">
                                {account?.mask || 1234}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="bank-card_icon">
                    <Image
                        src='/icons/Paypass.svg'
                        width={24}
                        height={24}
                        alt="pay"
                    />
                    <Image
                        src='/icons/mastercard.svg'
                        width={45}
                        height={32}
                        alt="mastercard"
                        className="ml-5"
                    />
                </div>

                <Image
                    src='/icons/Lines.svg'
                    width={316}
                    height={190}
                    alt="lines"
                    className="absolute top-0 left-0"
                />
            </Link>

            {/* COPY */}
        </div>
    );
}

export default BankCard;