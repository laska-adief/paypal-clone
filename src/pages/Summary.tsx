import Button from "../components/common/Button";
import Text from "../components/common/Text";
import Navbar from "../components/general/Navbar";

const Summary = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl max-xl:px-4 p-8 m-auto">
        <div className="col-span-2 bg-white border border-black border-opacity-10 rounded-xl p-6">
          <Text customClass="!text-lg !font-semibold mb-5">Paypal Balance</Text>
          <Text customClass="!text-5xl !font-medium mb-2">4,15 $</Text>
          <Text customClass="mb-8">Available</Text>
          <Button type="button" variant="primary" customClass="rounded-full !px-4 !py-1">
            Transfer Funds
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Summary;
