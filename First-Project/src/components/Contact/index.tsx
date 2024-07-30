import logo1 from '../../assets/images/icons8-location-24.png';
import logo2 from '../../assets/images/icons8-phone-24.png';
import logo3 from '../../assets/images/icons8-email-30.png';

function Contact() {
    return <div className="flex justify-center items-center max-w-full">
        <div className="w-2/5 py-20">
            <div className="text-center">
                <div className="text-3xl">CONTACT</div>
                <div className="pt-4 italic text-gray-600">Fan?Drop a note!</div>
            </div>
            <div className="flex flex-wrap justify-between py-8">
                <div className="flex flex-col text-lg">
                    <div className='flex'><span className='pr-5'><img src={logo1} alt="" /></span>Chicago, US</div>
                    <div className='flex'><span className='pr-5'><img src={logo2} alt=""/></span>Phone: +00 151515</div>
                    <div className='flex'><span className='pr-5'><img src={logo3} alt="" /></span>Email: mail@mail.com</div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                        <input className="border h-10 p-2 flex-1" type="text" placeholder="Name"/>
                        <input className="border h-10 p-2 flex-1" type="text" placeholder="Email"/>
                    </div>
                    <input className="border h-10 p-2 w-full" type="text" placeholder="Message"/>
                </div>
                <div className="flex items-end justify-end w-full pt-5">
                    <button className="bg-black text-white py-2 px-4">SEND</button>
                </div>
            </div>
        </div>
    </div>
}

export default Contact;