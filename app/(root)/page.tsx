import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";

const HomePage = () => {
    const loggedIn = {
        firstName: "Tareq",
        lastName: 'Jarwan',
        email: 'tjarwan22@gmail.com'
    }

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar
                transactions={[]}
                banks={[{
                    currentBalance: 1250.25
                }, {
                    currentBalance: 1250.25
                }]}
                user={loggedIn}
            />
        </section>
    );
}

export default HomePage;