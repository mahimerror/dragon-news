import { useParams } from "react-router-dom";
import Head from "../Head/Head";
import RightNav from "../RightNav/RightNav";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const NewsDetails = () => {

    const id = useParams().id;

    const { news } = useContext(AuthContext);

    const anews = news.find(bnews => bnews._id === id);

    return (
        <div>
            <Head></Head>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-8 border border-[#E7E7E7] rounded p-8">
                <div className="md:col-span-3">
                    <div className="mb-4">
                        <img src={anews.image_url} alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-bold text-2xl">{anews.title}</h2>
                        <p className="text-[#706F6F] mt-3 mb-8">{anews.details} </p>
                        <button className="text-white bg-red-700 flex items-center gap-3 py-2 px-6 font-medium text-xl">
                            <FaArrowLeft />
                            <p>All news in this category</p>
                        </button>
                    </div>
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;