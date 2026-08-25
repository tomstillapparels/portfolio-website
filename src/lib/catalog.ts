import heroEditorial from "@/assets/hero-editorial.jpg";
import thailandScriptTee from "@/assets/thailand-script-tee.jpg";
import loisueOversizedTee from "@/assets/loisue-oversized-tee.jpg";
import floralEmbroideredShirt from "@/assets/floral-embroidered-shirt.jpg";
import linenFernShirt from "@/assets/linen-fern-shirt.jpg";
import drawcordLinenTrouser from "@/assets/drawcord-linen-trouser.jpg";
import porsche911Tee from "@/assets/porsche-911-tee.jpg";
import corduroyVelourCrew from "@/assets/corduroy-velour-crew.jpg";
import kodakRacingSweat from "@/assets/kodak-racing-sweat.jpg";
import breakersVelourPolo from "@/assets/breakers-velour-polo.jpg";
import emiratesPanelTank from "@/assets/emirates-panel-tank.jpg";
import dangerPanelVelourTee from "@/assets/danger-panel-velour-tee.jpg";
import alexanderSpadeAcidCrew from "@/assets/alexander-spade-acid-crew.jpg";
import miumiuDripQuarterZipPolo from "@/assets/miumiu-drip-quarter-zip-polo.jpg";
import ttOriginalsPleatedTrouser from "@/assets/tt-originals-pleated-trouser.jpg";
import heycats313StarWashTee from "@/assets/heycats-313-star-wash-tee.jpg";
import arsenalEmiratesQuarterZipPolo from "@/assets/arsenal-emirates-quarter-zip-polo.jpg";
import landoFernEmbroideredShirt from "@/assets/lando-fern-embroidered-shirt.jpg";

export { heroEditorial };

export type Product = {
  title: string;
  sku: string;
  desc: string;
  img: string;
  badge?: string;
};

export const newArrivals: Product[] = [
  {
    title: "Emirates Panel Cutoff Tank",
    sku: "TNK-EMR-01",
    desc: "Acid-wash panelled jersey. Raw-edge armholes.",
    img: emiratesPanelTank,
    badge: "Low Stock",
  },
  {
    title: "Breakers 72 Velour Polo",
    sku: "POL-BRK-02",
    desc: "Embossed velour. Half-zip ribbed collar.",
    img: breakersVelourPolo,
  },
  {
    title: "Kodak Racing Crew Sweat",
    sku: "SWT-KDK-03",
    desc: "Mineral-wash fleece. Twin taped sleeves.",
    img: kodakRacingSweat,
  },
];

export const catalogProducts: Product[] = [
  {
    title: "Emirates Panel Cutoff Tank",
    sku: "TNK-EMR-01",
    desc: "Acid-wash panelled jersey. Raw-edge armholes.",
    img: emiratesPanelTank,
  },
  {
    title: "Breakers 72 Velour Polo",
    sku: "POL-BRK-02",
    desc: "Embossed velour. Half-zip ribbed collar.",
    img: breakersVelourPolo,
  },
  {
    title: "Kodak Racing Crew Sweat",
    sku: "SWT-KDK-03",
    desc: "Mineral-wash fleece. Twin taped sleeves.",
    img: kodakRacingSweat,
  },
  {
    title: "Porsche 911 Oversized Tee",
    sku: "TEE-PRS-04",
    desc: "Drop-shoulder cotton. Multi-placement print.",
    img: porsche911Tee,
  },
  {
    title: "Loisue Unknow Oversized Tee",
    sku: "TEE-LSU-05",
    desc: "Heavy jersey. Monogram foil print.",
    img: loisueOversizedTee,
  },
  {
    title: "Thailand Script Boxy Tee",
    sku: "TEE-THA-06",
    desc: "Boxy cotton fit. Chain-stitch script.",
    img: thailandScriptTee,
  },
  {
    title: "Corduroy Velour Crew",
    sku: "CRW-VLR-07",
    desc: "Ribbed velour knit. Tonal chest signature.",
    img: corduroyVelourCrew,
  },
  {
    title: "Floral Embroidered Shirt",
    sku: "SHT-FLR-08",
    desc: "Poplin cotton. Hem-run embroidery.",
    img: floralEmbroideredShirt,
  },
  {
    title: "Linen Fern Embroidered Shirt",
    sku: "SHT-FRN-09",
    desc: "Slub linen blend. Scattered fern motif.",
    img: linenFernShirt,
  },
  {
    title: "Drawcord Linen Trouser",
    sku: "TRS-LIN-10",
    desc: "Elastic paperbag waist. Wood-button fly.",
    img: drawcordLinenTrouser,
  },
  {
    title: "Danger Panel Velour Tee",
    sku: "TEE-DNG-11",
    desc: "Brushed velour jersey. Contrast side panels.",
    img: dangerPanelVelourTee,
  },
  {
    title: "Alexander Spade Acid Crewneck",
    sku: "SWT-ASP-12",
    desc: "Acid-wash cotton fleece. Tonal gothic embroidery.",
    img: alexanderSpadeAcidCrew,
  },
  {
    title: "Miumiu Drip Quarter-Zip Polo",
    sku: "POL-MIU-13",
    desc: "Smooth knit. Drip-print graphic chest.",
    img: miumiuDripQuarterZipPolo,
  },
  {
    title: "TT Originals Pleated Trouser",
    sku: "TRS-TTO-14",
    desc: "Crisp suiting weave. Double-button waist.",
    img: ttOriginalsPleatedTrouser,
  },
  {
    title: "Heycats 313 Star-Wash Tee",
    sku: "TEE-HCT-15",
    desc: "Acid star-wash cotton. Graffiti-script logo.",
    img: heycats313StarWashTee,
  },
  {
    title: "Arsenal Emirates Quarter-Zip Polo",
    sku: "POL-ARS-16",
    desc: "Athletic jersey knit. Ribbed contrast collar.",
    img: arsenalEmiratesQuarterZipPolo,
  },
  {
    title: "Lando Fern Embroidered Shirt",
    sku: "SHT-LND-17",
    desc: "Textured linen weave. Leaf-frond embroidery.",
    img: landoFernEmbroideredShirt,
  },
];
