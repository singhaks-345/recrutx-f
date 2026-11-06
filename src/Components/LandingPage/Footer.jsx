import { BsFillSendFill } from "react-icons/bs";


function Footer(){
    return (
        <>
        <div className="container-fluid top_footer-container">
        <div className="container" style={{paddingTop: 150}}>
        <div className="row">
            <div className="col-sm-3 topFooter_content">
                <h2>ABOUT US</h2>
                <p>Heaven frucvitful doesn't <br /> cover lesser dvsays appear <br /> creeping seasons so behold.</p>
            </div>
            <div className="col-sm-3 topFooter_content">
            <h2>CONTACT INFO</h2>
            <p>Address: Lucknow, <br /> Uttar Pradesh, 226022. <br /> <br /> Phone: +91-xx-xxxx-xxxx <br />Email: abc123@gmail.com</p>
            </div>
            <div className="col-sm-3 topFooter_content">
            <h2>IMPORTANT LINK</h2>
            <p>View Project <br /> Contact us <br /> Testimoniol <br /> Propertise <br /> Support</p>
            </div>
            <div className="col-sm-3 topFooter_content">
            <h2>NEWSLETTER</h2>
            <p>Heaven frucvitful doesn't cover lesser in <br />  days appear creeping.</p>
            <div className="input-group flex-nowrap">
  
  <input
    type="email"
    className="form-control"
    placeholder="Email Address"
    aria-label="Email Address"
    aria-describedby="addon-wrapping"
  />
  <span className="footer_btn" id="addon-wrapping">
    <BsFillSendFill/>
  </span>
</div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        
        <div className="row">
            <div className="col-sm-3">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="col-sm-3 foot_content">
                <h3>5000+ <span style={{fontSize: 20}}>Talented Hunter</span></h3>
            </div>
            <div className="col-sm-3 foot_content">
            <h3>451 <span style={{fontSize: 20}}>Talented Hunter</span></h3>
            </div>
            <div className="col-sm-3 foot_content">
            <h3>568 <span style={{fontSize: 20}}>Talented Hunter</span></h3>
            </div>
        </div>
        </div>
        <hr style={{color: "gray"}} />
        <div className="row text-secondary text-center">
            <p>Copyright &copy; 2024 RecruiterX | This is developed by ...</p>
        </div>
       </div>
        </>
    )
}


export default Footer