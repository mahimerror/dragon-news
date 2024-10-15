import { useContext } from "react";
import BreakingNews from "../BreakingNews/BreakingNews";
import Head from "../Head/Head";
import LeftNav from "../LeftNav/LeftNav";
import Navbar from "../Navbar/Navbar";
import NewsPortal from "../NewsPortal/NewsPortal";
import RightNav from "../RightNav/RightNav";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {

    const { loadingUser } = useContext(AuthContext);

    if (loadingUser)
        return <>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </>;

    return (
        <div>
            <Head></Head>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="">
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2">
                    <NewsPortal></NewsPortal>
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;