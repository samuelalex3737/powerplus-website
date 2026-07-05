import logoFullAsset from "@/assets/logo-full.png";
import logoIconAsset from "@/assets/logo-icon.png";
import josephAsset from "@/assets/joseph.png";

export const LOGO_FULL = logoFullAsset;
export const LOGO_ICON = logoIconAsset;
export const JOSEPH_PHOTO = josephAsset;

const px = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroSkyline: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920",
  servicesEnergy: px("1170412", 900),
  servicesAI: px("430208", 900),
  servicesGenerators: px("236089", 900),
  whyUsBg: px("257700", 1600),
  energyLighting: px("1170412", 900),
  energySolar: px("9875441", 900),
  energyControls: px("590022", 900),
  energyHvac: px("3862132", 900),
  energyIndustrial: px("257700", 900),
  energyAudit: px("3183197", 900),
  energyMonitoring: px("2760243", 900),
  energyVentilation: px("210881", 900),
  aiHero: px("3861969", 1600),
  aiCapture: px("430208", 900),
  aiProcess: px("8386434", 900),
  aiAccess: px("1004409", 900),
  generators: px("236089", 1600),
  generatorCummins: px("236089", 900),
  generatorPerkins: px("3862376", 900),
  ancillary: px("210881", 900),
  ctaBanner: px("1108572", 1600),
};
