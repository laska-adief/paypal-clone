import Text from "../common/Text";
import PaypalLogo from "./../../assets/images/paypal-logo.svg";

const SignupForm = () => {
  return (
    <>
      <div className="grid place-items-center-min-h-screen">
        <div className="w-[776px] mx-auto p-form max-md:w-full max-[360px]:w-max">
          <div className="flex items-center justify-between max-[360px]:gap-12 h-20">
            <div className="min-w-16"></div>
            <div className="w-full">
              <div className="w-full max-w-[40px] mx-auto">
                <img src={PaypalLogo} alt="Paypal Logo" />
              </div>
            </div>
            <Text isLink={true} href="/login" size="text-lg" weight="font-bold" customClass="min-w-16">
              Log In
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupForm;
