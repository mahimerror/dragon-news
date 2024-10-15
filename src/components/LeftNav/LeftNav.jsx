import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../../providers/AuthProvider";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    const {news} = useContext(AuthContext)

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const filterNews = news.filter(anews => anews.category_id === "4")

    return (
        <div>
            <h2 className="font-semibold text-xl mb-4">All Caterogy</h2>
            <ul>
                {
                    categories.map(category => <li className="text-[#9F9F9F] font-medium text-lg px-12 py-4" key={category.id}><NavLink>{category.name}</NavLink></li>)
                }
            </ul>
            <div className="space-y-4">
                {
                    filterNews.map(news => <div key={news._id} className="">
                        <img className="rounded" src={news.image_url} alt="" />
                        <p className="font-semibold text-lg my-4">{news.title}</p>
                        <div className="flex gap-5  font-medium">
                            <div className="fon"><p>Sports</p></div>
                            <div className="flex items-center gap-2 text-[#403F3F]">
                                <div className="">
                                    <SlCalender />
                                </div>
                                <div className="">
                                    {news.author.published_date.slice(0, 10)}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNav;