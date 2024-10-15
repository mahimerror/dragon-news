import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            
            <div className="flex items-center gap-5 bg-[#F3F3F3] p-4">
                <div className="text-xl font-medium bg-[#D72050] py-2 px-5"><p>Latest</p></div>
                <div>
                    <Marquee>
                        <Link className="mr-4">Match Highlights: Germany vs Spain — as it happened   !</Link>
                        <Link className="mr-4">Match Highlights: Germany vs Spain — as it happened   !</Link>
                        <Link className="mr-4">Match Highlights: Germany vs Spain — as it happened   !</Link>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;