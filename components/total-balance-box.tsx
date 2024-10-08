'use client';

import { useEffect, useState } from "react";

import AnimatedCounter from "./animated-counter";
import DoughnutChart from "./doughnut-chart";

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
    accounts,
    totalBanks,
    totalCurrentBalance
}) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    if (!domLoaded) return null;

    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} />
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>

                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Currant Balance
                    </p>

                    <p className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TotalBalanceBox;