import FAQCentered from "../components/FAQCentered";
import PageLayout from "../components/PageLayout";
import ProductTable from "../components/ProductTable";

export default function location() {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <FAQCentered />
      <ProductTable
        title="Product Details"
        rockerType="All Mountain Rocker – Smooth rocker at both tip and tail with camber underfoot provides balanced performance anywhere on the mountain."
        shape="True Tip LT – By trimming the amount of heavy ABS plastic in the tip and extending the lightweight wood core into this area with a taper that further reduces weight, Nordica enhances playfulness and maneuverability of the ski without compromising that unmatchable feeling of powerful and control."
        core="Lite Performance Wood | Poplar / Beech"
        laminates="Carbon Chassis LT – A proprietary blend of carbon materials to reduce weight while maximizing performance."
        sidewalls="ABS Sidewalls"
        bindingCompatibility="We recommend a brake width equal to or at most 15 mm wider than the ski waist width."
      />
    </PageLayout>
  );
}
