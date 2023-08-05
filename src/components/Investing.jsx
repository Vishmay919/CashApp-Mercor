import sicon4 from "../Assets/sicon4.png"
import sicon5 from "../Assets/sicon5.png"
import sicon6 from "../Assets/sicon6.png"
import stocks from "../Assets/stocks.png"
import bitcoin from "../Assets/bitcoin.png"
import floor from "../Assets/floor.png"
import graph from "../Assets/graph.png";
import apple from "../Assets/apple.png"
import playstore from "../Assets/playstore.png"

const Investing = () => {
  return (
    <div className="investing-banner">
    <div className="inveting-display">
        <div className="investing-title">Investing</div>

        <div className="testimonial-container">
            <div className="testimonial-display">
                <div className="testimonial-content-display">
                    <div className="testimonial-title">Stocks</div>
                    <div className="testimonial-tagline">Whether you’re an expert or just getting<br></br> started, Cash App is the fastest and most <br></br>accessible way to invest in stocks. Start <br></br>now with as little as $1.</div>
                </div>
                <img src={stocks} alt="logo" className="mobile-logo" />
            </div>
            <div className="testimonial-display">
                <img src={bitcoin} alt="logo" className="mobile-logo" />
                <div className="testimonial-content-display">
                    <div className="testimonial-title">Bitcoin</div>
                    <div className="testimonial-tagline">Cash App is the fastest way to convert<br></br> dollars to bitcoin. From your home screen,<br></br> six taps are all it takes to stack sats, buy an<br></br> entire bitcoin, or just see what it’s all about.</div>
                </div>
            </div>
        </div>
    </div>
    <img src={graph} alt="logo" className="graph" />
    <img src={floor} alt="logo" className="floor" />
    {/* End footer Section */}

    <div className="end-footer">
        <div className="end-buttons">
            <div className="icon">
                <img src={apple} alt="logo" className="button-icon" />
            </div>
            <div className="end-title">APP STORE</div>
        </div>
        <div className="end-buttons">
            <div className="icon">
                <img src={playstore} alt="logo" className="button-icon" />
            </div>
            <div className="end-title">GOOGLEPLAY</div>
        </div>
        <div className="end-content-container">
            <p className="end-content">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br></br>
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br></br>trading offered by Cash App. Cash App Investing does not trade bitcoin and <br></br>Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br></br> services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </p>
        </div>
        <div className="end-social-icons">
            <div className="end-s-icon">
                <img src={sicon4} alt="logo" className="button-icon" />
            </div>
            <div className="end-s-icon">
                <img src={sicon5} alt="logo" className="button-icon" />
            </div>
            <div className="end-s-icon">
                <img src={sicon6} alt="logo" className="button-icon" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Investing