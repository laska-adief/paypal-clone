import Button from "../components/common/Button";
import Text from "../components/common/Text";
import Navbar from "../components/general/Navbar";

const Summary = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-x-8 max-w-screen-xl max-xl:px-4 p-8 px-14 m-auto max-md:grid-cols-1 max-md:gap-y-4 max-md:gap-x-0">
        <div className="col-span-2 flex flex-col gap-8">
          <div className="bg-white border border-black border-opacity-10 rounded-xl p-6 h-max">
            <Text customClass="!text-lg !font-bold mb-5">Paypal Balance</Text>
            <Text customClass="!text-5xl !font-medium mb-2">4,15 $</Text>
            <Text customClass="mb-8">Available</Text>
            <Button type="button" variant="primary" customClass="rounded-full !px-4 !py-1">
              Transfer Funds
            </Button>
          </div>
          <div className="bg-white border border-black border-opacity-10 rounded-xl p-6 h-max">
            <Text customClass="!text-lg !font-bold mb-5">Recent Activity</Text>
            <Text customClass="!text-lg mb-5">
              See when money comes in, and when it goes out. You’ll find your recent PayPal activity here.
            </Text>
            <Text isLink={true} href="/myaccount/activities" customClass="!font-bold">
              Show all
            </Text>
          </div>
        </div>
        <div className="bg-white border border-black border-opacity-10 rounded-xl p-6 h-max max-md:w-full">
          <div className="flex gap-2">
            <Button type="button" variant="primary" customClass="flex-1 rounded-full">
              Send
            </Button>
            <Button type="button" variant="primary" customClass="flex-1 rounded-full">
              Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
