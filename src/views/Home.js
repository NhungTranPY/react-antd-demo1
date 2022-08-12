import AppHero from "../components/home/Hero"
import AppAbout from "../components/home/About"
import AppFeature from "../components/home/Feature"
import AppWorks from "../components/home/Works"
import AppFQA from "../components/home/FAQ"
import AppPricing from "../components/home/Pricing"
import AppContact from "../components/home/Contact"

function AppHome() {
    return (
        <div className="main">
            <AppHero/>
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFQA />
            <AppPricing />
            <AppContact />
        </div>
    )
}

export default AppHome