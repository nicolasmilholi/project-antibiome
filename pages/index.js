import Imagem from "../Components/header";
import ParagraphsBlock from "../Components/GlobalComponents/ParagraphsBlock";
import Contents from "../Components/Icons";
import SectionTwoHomePage from "../Components/sectiontwohomepage";

import BannerHero from "../public/banner-hero.png"
import Informations from "../public/informations.png"

export default function Home() {

  const structureSectionOne = {
    title: "we're here to help",
    paragraphs: [
      "When it comes to caring for our most intimate areas, we`ve lost our connection",
      "Embarrassed, unwilling, or unable to communicate with others, we`re needlessly neglecting the parts of our bodies that need it most.",
      "We`re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.",
    ]
  }

  const structureSectionTwo = {
    title: "whatever your age. whatever your lifestyle. whatever your interests.",
    paragraphs: [
      "Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.",
      "As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it."
    ]
  }
  return (
    <div>
      <Imagem
        imagePath={BannerHero}
      />
      <ParagraphsBlock
        structure={structureSectionOne}
      />
      <Contents />
      <ParagraphsBlock
        structure={structureSectionTwo}
      />
      <SectionTwoHomePage />
      <Imagem
        imagePath={Informations}
      />
    </div>
  );
}
