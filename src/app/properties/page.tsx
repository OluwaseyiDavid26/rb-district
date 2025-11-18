import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Properties from "@/components/Properties";

export default function AllProperties() {
  return (
    <div>
      <Header />
      <Properties isHomePage={false} itemsPerPage={6} />
      <Footer />
    </div>
  );
}
