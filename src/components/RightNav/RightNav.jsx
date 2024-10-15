import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import q1 from "../../assets/qZone1.png";
import q2 from "../../assets/qZone2.png";
import q3 from "../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const RightNav = () => {

    const {signinUserByGoogle, signinUserByGithub}=useContext(AuthContext) 

    const handleGoogleLogin = () =>{
        signinUserByGoogle()
        .then(result=> console.log(result))
        .catch(error=> console.error(error))
    }

    const handleGithubLogin = () =>{
        signinUserByGithub()
        .then(result=> console.log(result))
        .catch(error=> console.error(error))
    }

    return (
        <div>
            <h2 className="font-semibold text-xl mb-5">Login With</h2>
            <div className="space-y-3 mb-8">
                <button onClick={handleGoogleLogin} className="w-full flex items-center gap-3 text-[#58A7DE] justify-center px-4 py-2 border-[2px] border-[#58A7DE] rounded">
                    <FaGoogle />
                    <p>Login with Google</p>
                </button>
                <button onClick={handleGithubLogin} className="w-full flex items-center gap-3 justify-center px-4 py-2 border-[2px] rounded">
                    <FaGithub />
                    <p>Login with Github</p>
                </button>
            </div>

            <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
            <div className="text-[#706F6F] font-medium mb-8">
                <button className="w-full flex items-center gap-3 p-4 border border-[#E7E7E7] rounded-t-md">
                    <FaFacebookF className="bg-[#F3F3F3] rounded-full w-8 h-8 p-2 text-[#3B599C]" />
                    <p>Facebook</p>
                </button>
                <button className="w-full flex items-center gap-3 p-4 border-x border-[#E7E7E7]">
                    <FaTwitter className="bg-[#F3F3F3] rounded-full w-8 h-8 p-2 text-[#58A7DE]" />
                    <p>Twitter</p>
                </button>
                <button className="w-full flex items-center gap-3 p-4 border border-[#E7E7E7] rounded-b-md">
                    <FaInstagram className="bg-[#F3F3F3] rounded-full w-8 h-8 p-2 text-[#D82D7E]" />
                    <p>Instagram</p>
                </button>
            </div>

            <div className="bg-[#F3F3F3] p-4 mb-5">
                <h2 className="font-semibold text-xl mb-5">Q-Zone</h2>
                <div className="space-y-5">
                    <img src={q1} alt="" />
                    <img src={q2} alt="" />
                    <img src={q3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;