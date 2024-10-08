import Button from "@/components/Button";
import Header from "@/components/LogoHeader";
import { useCreatePaymentCheckout } from "@/queries/payment";
import { useSubscriptionStore } from "@/stores/subscription";
// import { useNavigate } from "react-router-dom";
// import { useStripe } from "@stripe/react-stripe-js";
import { showErrorToast } from "@/components/Toast";
import { LoadingIcon } from "@/icons";
import { useState } from "react";

export default function BillingDetails() {
  // const navigate = useNavigate();
  // const stripe = useStripe();
  const [isLoading, _setIsLoading] = useState(false);
  // const { getEndDate, selectedPriceId, selectedPlan } = useSubscriptionStore();
  // const startDate = new Date().toLocaleDateString();
  // const endDate = getEndDate();
  // const createPaymentCheckout = useCreatePaymentCheckout();

  // const handlePayment = async () => {
  //   if (!selectedPlan || !selectedPriceId) return;
  //   setIsLoading(true);
  //   createPaymentCheckout
  //     .mutateAsync({
  //       subscriptionUid: selectedPlan?.uid,
  //       intervalId: selectedPriceId,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       if (!stripe) {
  //         showErrorToast("Stripe is not loaded");
  //         return;
  //       }

  //       stripe?.redirectToCheckout({
  //         sessionId: data.data.sessionCheckoutId,
  //       });
  //     })
  //     .catch((err) => {
  //       const errorMessage =
  //         err?.response?.data?.errors?.[0]?.message || "An error occurred";
  //       showErrorToast(errorMessage);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // Função para formatar a data
  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  // Data de hoje
  const today = new Date();
  const startDate = formatDate(today);

  // Data de ontem
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const endDate = formatDate(yesterday);

  return (
    <div className="p-5 flex flex-col space-y-3">
      <div className="flex flex-col w-2/4 p-2 mx-auto space-y-2">
        <Header />
      </div>
      <div className="flex flex-col space-y-3 w-6/12 self-center p-3">
        <h1 className="text-xl font-bold text-left">4. Detalhes da Compra</h1>
        <div className="flex flex-col space-y-4 text-left  rounded-md p-4 bg-white">
          <div className="flex flex-col">
            <div className="text-xl font-semibold">
              Mudanças efetivas de hoje
            </div>
            <div className={"text-xs font-normal text-gray-500"}>
              Essas alterações serão aplicadas imediatamente e você será cobrado
              hoje
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-semibold">Validade do Plano</div>
            <div className={"text-xs font-normal text-gray-500"}>
              {startDate} - {endDate}
              {/* crie uma data ficticia */}
            </div>
          </div>
        </div>
        <Button onClick={() => console.log("teste")}>
          {isLoading ? <LoadingIcon /> : "Continue para pagar"}
        </Button>
      </div>
    </div>
  );
}
