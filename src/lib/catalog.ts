import heroEditorial from "@/assets/hero-editorial.jpg";
import thailandScriptTee from "@/assets/thailand-script-tee.jpg.asset.json";
import loisueOversizedTee from "@/assets/loisue-oversized-tee.jpg.asset.json";
import floralEmbroideredShirt from "@/assets/floral-embroidered-shirt.jpg.asset.json";
import linenFernShirt from "@/assets/linen-fern-shirt.jpg.asset.json";
import drawcordLinenTrouser from "@/assets/drawcord-linen-trouser.jpg.asset.json";
import porsche911Tee from "@/assets/porsche-911-tee.jpg.asset.json";
import corduroyVelourCrew from "@/assets/corduroy-velour-crew.jpg.asset.json";
import kodakRacingSweat from "@/assets/kodak-racing-sweat.jpg.asset.json";
import breakersVelourPolo from "@/assets/breakers-velour-polo.jpg.asset.json";
import emiratesPanelTank from "@/assets/emirates-panel-tank.jpg.asset.json";
import dangerPanelVelourTee from "@/assets/danger-panel-velour-tee.jpg.asset.json";
import alexanderSpadeAcidCrew from "@/assets/alexander-spade-acid-crew.jpg.asset.json";
import miumiuDripQuarterZipPolo from "@/assets/miumiu-drip-quarter-zip-polo.jpg.asset.json";
import ttOriginalsPleatedTrouser from "@/assets/tt-originals-pleated-trouser.jpg.asset.json";
import heycats313StarWashTee from "@/assets/heycats-313-star-wash-tee.jpg.asset.json";
import arsenalEmiratesQuarterZipPolo from "@/assets/arsenal-emirates-quarter-zip-polo.jpg.asset.json";
import landoFernEmbroideredShirt from "@/assets/lando-fern-embroidered-shirt.jpg.asset.json";

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
    img: emiratesPanelTank.url,
    badge: "Low Stock",
  },
  {
    title: "Breakers 72 Velour Polo",
    sku: "POL-BRK-02",
    desc: "Embossed velour. Half-zip ribbed collar.",
    img: breakersVelourPolo.url,
  },
  {
    title: "Kodak Racing Crew Sweat",
    sku: "SWT-KDK-03",
    desc: "Mineral-wash fleece. Twin taped sleeves.",
    img: kodakRacingSweat.url,
  },
];

export const catalogProducts: Product[] = [
  {
    title: "Emirates Panel Cutoff Tank",
    sku: "TNK-EMR-01",
    desc: "Acid-wash panelled jersey. Raw-edge armholes.",
    img: emiratesPanelTank.url,
  },
  {
    title: "Breakers 72 Velour Polo",
    sku: "POL-BRK-02",
    desc: "Embossed velour. Half-zip ribbed collar.",
    img: breakersVelourPolo.url,
  },
  {
    title: "Kodak Racing Crew Sweat",
    sku: "SWT-KDK-03",
    desc: "Mineral-wash fleece. Twin taped sleeves.",
    img: kodakRacingSweat.url,
  },
  {
    title: "Porsche 911 Oversized Tee",
    sku: "TEE-PRS-04",
    desc: "Drop-shoulder cotton. Multi-placement print.",
    img: porsche911Tee.url,
  },
  {
    title: "Loisue Unknow Oversized Tee",
    sku: "TEE-LSU-05",
    desc: "Heavy jersey. Monogram foil print.",
    img: loisueOversizedTee.url,
  },
  {
    title: "Thailand Script Boxy Tee",
    sku: "TEE-THA-06",
    desc: "Boxy cotton fit. Chain-stitch script.",
    img: thailandScriptTee.url,
  },
  {
    title: "Corduroy Velour Crew",
    sku: "CRW-VLR-07",
    desc: "Ribbed velour knit. Tonal chest signature.",
    img: corduroyVelourCrew.url,
  },
  {
    title: "Floral Embroidered Shirt",
    sku: "SHT-FLR-08",
    desc: "Poplin cotton. Hem-run embroidery.",
    img: floralEmbroideredShirt.url,
  },
  {
    title: "Linen Fern Embroidered Shirt",
    sku: "SHT-FRN-09",
    desc: "Slub linen blend. Scattered fern motif.",
    img: linenFernShirt.url,
  },
  {
    title: "Drawcord Linen Trouser",
    sku: "TRS-LIN-10",
    desc: "Elastic paperbag waist. Wood-button fly.",
    img: drawcordLinenTrouser.url,
  },
  {
    title: "Danger Panel Velour Tee",
    sku: "TEE-DNG-11",
    desc: "Brushed velour jersey. Contrast side panels.",
    img: dangerPanelVelourTee.url,
  },
  {
    title: "Alexander Spade Acid Crewneck",
    sku: "SWT-ASP-12",
    desc: "Acid-wash cotton fleece. Tonal gothic embroidery.",
    img: alexanderSpadeAcidCrew.url,
  },
  {
    title: "Miumiu Drip Quarter-Zip Polo",
    sku: "POL-MIU-13",
    desc: "Smooth knit. Drip-print graphic chest.",
    img: miumiuDripQuarterZipPolo.url,
  },
  {
    title: "TT Originals Pleated Trouser",
    sku: "TRS-TTO-14",
    desc: "Crisp suiting weave. Double-button waist.",
    img: ttOriginalsPleatedTrouser.url,
  },
  {
    title: "Heycats 313 Star-Wash Tee",
    sku: "TEE-HCT-15",
    desc: "Acid star-wash cotton. Graffiti-script logo.",
    img: heycats313StarWashTee.url,
  },
  {
    title: "Arsenal Emirates Quarter-Zip Polo",
    sku: "POL-ARS-16",
    desc: "Athletic jersey knit. Ribbed contrast collar.",
    img: arsenalEmiratesQuarterZipPolo.url,
  },
  {
    title: "Lando Fern Embroidered Shirt",
    sku: "SHT-LND-17",
    desc: "Textured linen weave. Leaf-frond embroidery.",
    img: landoFernEmbroideredShirt.url,
  },
];
