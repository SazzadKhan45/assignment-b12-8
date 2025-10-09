import { Link } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Container from "../Container/Container";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />

            <div className="bg-[#f1f1f1] px-2 md:px-0">
                <Container>
                    <div className="mx-auto py-12">
                        <img className="mx-auto" src={errorImg} />
                        <div className="text-center py-4">
                            <h2 className="text-2xl md:text-4xl font-bold">Oops, page not found!</h2>
                            <p className="text-gray-500 py-4 mb-4">The page you are looking for is not available.</p>
                            <Link className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] " to="/">Go Back!</Link>
                        </div>
                    </div>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default ErrorPage;