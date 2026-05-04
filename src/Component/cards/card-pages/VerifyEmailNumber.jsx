import './card-page.css'

function VerifyEmailMobile(){
    return(
        <div className="verify-page">
            <div className="verify-dashboard">
                <p className='verify-text'>Please Enter Required Details to Verify Email / Mobile Number</p>
                <div className="verify-radio">
                    <input type="radio" name='verify-radio-btns' />Verify Mobile Number
                    <input type="radio" name='verify-radio-btns' />Verify Mobile Address
                </div>
                <div className="verify-form">
                    <form className='verifyForm'>
                        <input type="text" placeholder='Enter Aadhaar Number' />
                        <input type="text" placeholder='Enter Mobile Number' />
                        <span className='verify-captcha'>
                            <input type="text" placeholder='Enter Captcha' />
                            <b>6fc965</b>
                            <i className="bi bi-volume-up-fill"></i>
                            <i className="bi bi-arrow-clockwise"></i>
                        </span>
                        <button className='sendOtpBtn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmailMobile