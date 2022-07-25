import Imagem from "../components/globalComponents/image";
import ParagraphsSection from "../components/globalComponents/paragraphs";
import Information from "../components/Information";

import BannerHero from "../public/banner-hero.png"
import BannerMobile from "../public/banner-mobile.png"

import Informations from "../public/informations.png"
import InformationsMobile from "../public/banner-intibiome-05.png"

import Products from "../components/products";
import Discoveries from "../components/articles";
import More from "../components/more";
import Footer from "../components/footer";

export default function Home() {

  const structureSectionOne = {
    title: 'were here to help',
    paragraphs: [
      "When it comes to caring for our most intimate areas, we`ve lost our connection",
      "Embarrassed, unwilling, or unable to communicate with others, we`re needlessly neglecting the parts of our bodies that need it most.",
      "We`re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.",
    ],
  }

  const structureSectionTwo = {
    title: 'whatever your age. whatever your lifestyle. whatever your interests.',
    paragraphs: [
      "Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.",
      "As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it."
    ],
  }
  return (
    <>
      <Imagem
        imagePath={BannerHero}
        imageMobile={BannerMobile}
      />
      <ParagraphsSection
        structure={structureSectionOne}
      />
      <Information />
      <ParagraphsSection
        structure={structureSectionTwo}
      />

      <Products/>

      <Imagem
        imagePath={Informations}
        imageMobile={InformationsMobile}
      />

      <Discoveries />

      <More/>

      <Footer/>
    </>
  );
}
