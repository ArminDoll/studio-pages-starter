import Banner from "../components/Banner";
import BigButton from "../components/BigButton";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";

export default function armin() {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <Banner />
      <BigButton title="Button Title" href="#" />
      <Divider />
      <Footer />
    </PageLayout>
  );
}
