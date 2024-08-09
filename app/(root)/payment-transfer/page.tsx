import HeaderBox from "@/components/header-box";
import PaymentTransferForm from "@/components/payment-transfer-form";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const PaymentTransferPage = async () => {
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({
        userId: loggedIn.$id
    })

    if (!accounts) return;

    const accountsData = accounts?.data;

    return (
        <section className="payment-transfer">
            <HeaderBox
                title="Payment Transfer"
                subtext="Please provide any specific details or notes related to the payment transfer"
            />

            <section className="size-full pt-5">
                <PaymentTransferForm accounts={accountsData} />
            </section>
        </section>
    );
}

export default PaymentTransferPage;