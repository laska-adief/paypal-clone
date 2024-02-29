import Text from "../common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import PaypalLogo from "./../../assets/images/paypal-logo.svg";
import BackButton from "./../../assets/images/back-button.svg";
import { SignupFormProps } from "../../types/type-auth";

const SignupForm: React.FC<SignupFormProps> = ({ activeStep, validStep }) => {
  return (
    <>
      <div className="grid place-items-center-min-h-screen">
        <div className="w-[776px] mx-auto p-form max-md:w-full max-[360px]:w-max">
          <div className="flex items-center justify-between max-[360px]:gap-12 h-20">
            <div className="p-2 w-fit h-fit cursor-pointer rounded-full hover:bg-muted-gray">
              <img src={BackButton} alt="Back" className="w-10" />
            </div>
            <div className="w-full">
              <div className="w-full max-w-[40px] mx-auto">
                <img src={PaypalLogo} alt="Paypal Logo" />
              </div>
            </div>
            <Text isLink={true} href="/login" size="text-lg" weight="font-bold" customClass="min-w-16">
              Log In
            </Text>
          </div>
          {activeStep === 1 && (
            <div className="flex flex-col justify-center items-center gap-8 px-16 pt-3">
              <Text isLink={false} size="text-3xl" weight="font-medium">
                Sign up for PayPal
              </Text>
              <form className="w-full flex flex-col place-items-center pt-4 px-10">
                <Input type="email" placeholder="Email address" value={""} onChange={() => {}} />
                <Button
                  type="submit"
                  variant="primary"
                  width="w-fit"
                  borderRadius="rounded-full"
                  customClass="!px-28 my-10"
                  onClick={() => validStep(1)}>
                  Next
                </Button>
              </form>
            </div>
          )}

          {activeStep === 2 && (
            <div className="flex flex-col justify-center items-center gap-8 px-16 pt-3">
              <Text isLink={false} size="text-3xl" weight="font-medium">
                Phone number
              </Text>
              <form className="w-full flex flex-col place-items-center pt-4 px-10">
                <Input type="text" placeholder="Phone number" value={""} onChange={() => {}} />
                <Text size="text-sm" customClass="mt-2">
                  By continuing, you confirm that you are authorized to use this phone number and agree to receive SMS. Fees may apply for
                  providing mobile services.
                </Text>
                <Button
                  type="submit"
                  variant="primary"
                  width="w-fit"
                  borderRadius="rounded-full"
                  customClass="!px-28 my-10"
                  onClick={() => validStep(2)}>
                  Next
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SignupForm;
