import './card-page.css'

function DownloadAadhar() {
    return (
        <>
            <div className="download-page">
                <div className="download-dashboard">
                    <p className='selectOption'>Select 12 digit Aadhaar Number /16 digit Virtual ID (VID) Number / 28 digit Enrolment ID (EID) Number / 28 digit Service ID (SID) Number.</p>
                    <span className='radio-btns'>
                        <input type="radio" name="Select type" />Aadhaar Number
                        <input type="radio" name="Select type" />Enrollment ID Number
                        <input type="radio" name="Select type" />Virtual ID Number
                        <input type="radio" name="Select type" />SID
                    </span>
                    <input type="text" placeholder="Enter Aadhaar Number" className='aadhaarNumber'/>
                    <span className='captcha-wrap'><input type="text" placeholder='Enter Captcha' />
                            <b>xa3e72</b>
                            <i className="bi bi-volume-up-fill"></i>
                            <i className="bi bi-arrow-clockwise"></i>
                    </span>
                    <button className='sendOtpBtn'>Send OTP</button>
                </div>
            </div>
        </>
    )
}

export default DownloadAadhar