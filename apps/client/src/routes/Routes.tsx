import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import EnterpriseTraining from "../pages/EnterpriseTraining";
import SectorTemplate from "../pages/Sector";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import { sectors } from "../data/sectors.data";
import TalentSolutions from "../pages/TalentSolutions";
import Academy from "../pages/Academy/Academy";
import Beginner from "../pages/Academy/Beginner";
import Intermediate from "../pages/Academy/Intermediate";
import Advanced from "../pages/Academy/Advanced";
import PrivateTraining from "../pages/Academy/PrivateTraining";
import Courses from "../pages/Academy/Courses";
import Course from "../pages/Academy/Course";
import Terms from "../pages/Terms";


export default function RoutePage() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="enterprise-training" element={<EnterpriseTraining />} />
                <Route path="sectors/">
                    <Route index element={<NotFound />} />
                    {sectors.map((sec, i) => <Route path={sec.route} element={<SectorTemplate {...sec} />} key={`${i}-${sec.route}-${i}`} />)}
                </Route>
                <Route path="talent-solutions" element={<TalentSolutions />} />
                <Route path="academy/">
                    <Route index element={<Academy />} />
                    <Route path="beginner" element={<Beginner />} />
                    <Route path="intermediate" element={<Intermediate />} />
                    <Route path="advanced" element={<Advanced />} />
                    <Route path="private-training" element={<PrivateTraining />} />
                    <Route path="courses/">
                        <Route index element={<Courses />} />
                        <Route path=":slug" element={<Course />} />
                    </Route>
                </Route>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}