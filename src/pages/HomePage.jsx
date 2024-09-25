import FloatingNav from "../components/FloatingNav";
import HomeBanner from "../components/HomeBanner";
import Layout from "../components/Layout/Layout";
import FavouritesAndCharcteristics from "../components/ui/FavouritesAndCharcteristics";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      {/* floating nav for mobiles version */}
      <FloatingNav />
      {/* favourites and characteristics games for moile version */}
      <FavouritesAndCharcteristics />
    </Layout>
  );
};

export default HomePage;
