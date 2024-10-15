import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const NewsPortal = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <h2 className="font-semibold text-xl mb-4">Dragon News Home</h2>
            {
                news.map(anews => <div key={anews._id}>
                    <div className="border border-[#E7E7E7] rounded mb-7">
                        <div className="p-5 bg-[#F3F3F3] flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="">
                                    <img className="w-8 rounded-full" src={anews?.author.img} alt="" />
                                </div>
                                <div className="">
                                    <div className="font-semibold">
                                        <p>{anews?.author.name}</p>
                                    </div>
                                    <div className="text-sm text-[#706F6F]">
                                        <p>{anews.author.published_date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="">
                                    <CiBookmark />
                                </div>
                                <div className="">
                                    <BsShare />
                                </div>
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            <div className="mt-3">
                                <h2 className="text-xl font-bold">{anews.title}</h2>
                            </div>
                            <div>
                                <img className="mt-5 mb-8" src={anews.image_url} alt="" />
                                <div className="text-[#706F6F]">
                                    {
                                        anews.details.length < 300 ?
                                            <p>{anews.details}</p> :
                                            <div className="">
                                                <p>{anews.details.slice(0, 300)}...</p>
                                                <Link to={`/news/${anews._id}`}><button className="btn btn-link p-0">Read more</button></Link>
                                            </div>
                                    }
                                </div>
                                <hr className="my-5"></hr>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-[#FF8C47]"/>
                                            <FaStar className="text-[#FF8C47]"/>
                                            <FaStar className="text-[#FF8C47]"/>
                                            <FaStar className="text-[#FF8C47]"/>
                                            <FaStar className="text-[#FF8C47]"/>
                                        </div>
                                        <div className="text-[#706F6F] font-medium"><p>{anews.rating.number}</p></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-[#706F6F] font-medium"><p><FaEye /></p></div>
                                        <div className="text-[#706F6F] font-medium"><p>{anews.total_view}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default NewsPortal;