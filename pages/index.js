import Imagem from "../Components/header";
import ParagraphsBlock from "../components/paragraphs";
import Icons from "../Components/Icons";

import BannerHero from "../public/banner-hero.png"
import Informations from "../public/informations.png"
import Cards from "../components/cards";
import Discoveries from "../components/discoveries";

export default function Home() {

  const structureSectionOne = {
    title: 'were here to help',
    padding: 'pl-96 pr-96',
    paragraphs: [
      "When it comes to caring for our most intimate areas, we`ve lost our connection",
      "Embarrassed, unwilling, or unable to communicate with others, we`re needlessly neglecting the parts of our bodies that need it most.",
      "We`re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.",
    ],
  }

  const structureSectionTwo = {
    title: 'whatever your age. whatever your lifestyle. whatever your interests.',
    padding: 'pl-72 pr-72',
    paragraphs: [
      "Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.",
      "As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it."
    ],
  }
  return (
    <div>
      <Imagem
        imagePath={BannerHero}
      />
      <ParagraphsBlock
        structure={structureSectionTwo}
      />
      <Icons />
      <ParagraphsBlock
        structure={structureSectionOne}
      />
      <Cards />
      <Imagem
        imagePath={Informations}
      />
      <Discoveries />
    </div>
  );
}
