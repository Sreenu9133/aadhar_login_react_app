import './card-page.css'

function ReportDeath() {
    return (
        <div className="report-page">
            <div className="report-dashboard">
                <p className='report-death-text'>
                    Login to Aadhaar via OTP
                </p>
                <div className="report-death-form">
                    <form className='death-login-form'>
                        <input type="text" placeholder='Enter Aadhaar Number' />
                        <span className='report-death-captcha'>
                            <input type="text" placeholder='Enter Captcha' />
                            <span className='death-captcha-field'>
                                <b>fb7rx</b>
                                <p>|</p>
                                <i className="bi bi-volume-up-fill"></i>
                                <i className="bi bi-arrow-clockwise"></i>
                            </span>
                        </span>
                        <button className='otp-login-btn'>Login with OTP</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReportDeath