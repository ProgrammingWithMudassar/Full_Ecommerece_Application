import { Appbar, Navbar, CategoriesContainer, Highlights, BestSelling, OurProducts, NewArrivals, Footer, Header } from "../../components";


const Home = () => {
    return (
        <div className="w-[100%] overflow-x-hidden">
            <Navbar />
            <Appbar />
            <Header />
            <CategoriesContainer />
            <BestSelling />
            <Highlights />
            <OurProducts />
            <NewArrivals />
            <Footer />
        </div>
    );
}

export default Home;
