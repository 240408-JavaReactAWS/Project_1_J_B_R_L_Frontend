import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './form.css';
function OTPForm() {
    const email : string = useParams().email?.toString()??'';
    const [otp, setOtp] = React.useState('');
    let setOtpHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
    }
return (
    <div className="form-outer-container">
            <form className='mb-3 form-inner-container'>
                    <h1 className='form-header'>Enter Your OTP</h1>
                    <hr />
                    <div className='alert-container'></div>
                    <p>Enter the OTP sent to your email address.</p>
                    <input type="email" className="form-control" value={email ? email : ""} id="email" disabled readOnly></input>
                    <input type="text" className="form-control" id="otp" placeholder='Enter OTP'/>
                    <div className='d-grid gap-2'>
                            <button type="button" className="btn btn-primary" id="otp-button">Submit OTP</button>
                    </div>
            </form>
    </div>
)
}

export default OTPForm