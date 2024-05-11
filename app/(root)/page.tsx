import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";

const HomePage = () => {
    const loggedIn = { firstName: "Tareq" }
    return (
        <section className="home">
            <div className="home-content">
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
            </div>
        </section>
    );
}

export default HomePage;