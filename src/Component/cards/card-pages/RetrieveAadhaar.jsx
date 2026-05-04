import './card-page.css'

function RetrieveAadhaar(){
    return(
        <div className="retrieve-page">
            <div className="retrieve-dashboard">
                <p className='retrieve-text'>Select 12 Digit Aadhaar Number/ 28 digit Enrolment ID/ SID</p>
                <span className='retrieveRadio-btns'>
                    <input type="radio" name='retrieveRadio' />Aadhaar Number
                    <input type="radio" name='retrieveRadio' />Enrollment ID Number/SID
                </span>
                <span>
                    <form className='retrieve-input'>
                        <input type="text" placeholder='Enter Name as per Aadhaar' />
                        <input type="date" placeholder='Enter Date of Birth' />
                        <span className='innerRetrieve-input'>
                            <input type="text" placeholder='Enter Mobile Number' />
                            <h1>OR</h1>
                            <input type="email" placeholder='Enter Email Address' />
                        </span>
                        <span className='retrieve-captcha'>
                             <input type="text" placeholder='Enter Captcha' />
                             <b>832an8</b>
                             <i className="bi bi-volume-up-fill"></i>
                             <i className="bi bi-arrow-clockwise"></i>
                        </span>
                        <button className='sendOtpBtn'>Send OTP</button>
                    </form>
                </span>
            </div>
        </div>
    )
}

export default RetrieveAadhaar