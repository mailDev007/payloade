import Navigation from "./components/Routing/routes";
import Banner from "./components/Banner";
import MovieSection from "./components/ResultSection";

const OverviewPage = () => {
    
    return (
        <div>
            <Navigation />
            <Banner>
                Watch something incredible.
            </Banner>
            <MovieSection />
        </div>
    );
}

export default OverviewPage;