import paymentbanner from "../Assets/paymentbanner.png"
import bankingbanner from "../Assets/bankingbanner.png"
import cashcardbanner from "../Assets/cashcardbanner.png"

const Others = () => {
  return (
    <div className="h-auto">
    <div>
              <img src={paymentbanner} alt="logo" className="w-full h-auto" />
          </div>

          {/* Banking Banner Section */}
          <div className="banner-display">
              <img src={bankingbanner} alt="logo" className="w-full h-auto" />
          </div>

          {/* cash card Banner Section */}
          <div className="banner-display">
              <img src={cashcardbanner} alt="logo" className="w-full h-auto" />
          </div>
    </div>
  )
}

export default Others