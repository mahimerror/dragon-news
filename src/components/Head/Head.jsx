import moment from "moment";
import logo from "../../assets/logo.png"


const Head = () => {
    return (
        <div className="my-8">
            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <p className="text-[#706F6F] text-lg pt-5 pb-3">Journalism Without Fear or Favour</p>
                </div>
                <div className="">
                    <p className="text-[#706F6F] text-xl font-medium">
                        <span className="text-black">{moment().format('dddd')} </span>
                        {moment().format('MMMM D, YYYY')}
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Head;