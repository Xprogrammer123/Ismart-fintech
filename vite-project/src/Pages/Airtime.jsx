import AirtimeAds from "../components/Components/Ads/AirtimeAds"
import Footer from "../components/Components/Footer"
import PreviousNumber from "../components/Components/Helpers/PreviousNumber"
import PurchaseAirtime from "../components/Components/PurchaseAirtime"

function Airtime() {
  return (
    <div className="">
        {/**NAVBAR */}
        <PurchaseAirtime />
        <div className="mt-16 flex items-center justify-center">
            <AirtimeAds />
        </div>
        <div className=" mt-12 flex items-center justify-center">
            <PreviousNumber />
        </div>

        <div className="w-full mt-8 overflow-x-hidden">
            <Footer />
        </div>
    </div>
  )
}

export default Airtime