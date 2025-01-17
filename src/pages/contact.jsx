import Locale from "../components/common/locale";
import Contact from "../assets/images/contact.png";
export default function contact() {

    return (
        <div className="z-40 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 bg-custom-gradient contact-height">
            <div className="container mx-auto border-general text-center ">
                <div className="flex justify-center">
                    <img src={Contact} className='w-44 h-44' alt="Contact | Hasan ali haolader" srcset="" />
                </div>
                <div><Locale label={'contact'} /></div> <br></br>
                <div><a href="mailto:rahibhasan689009@gmail.com">rahibhasan689009@gmail.com</a></div>
            </div>
        </div>
    )
}
