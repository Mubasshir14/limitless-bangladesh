import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import MapComponent from "../Nav/MapComponent/MapComponent";
import Places from "../Places/Places";
import SubDivision from "../SubDivision/SubDivision";
import TestimonialCard from "../TestimonialCard/TestimonialCard";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Places/>
            <SubDivision/>
            <Gallery/>
            <Faq/>
            <TestimonialCard/>
      <MapComponent/>
        </div>
    );
};

export default Home;