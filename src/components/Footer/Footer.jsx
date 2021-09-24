import { useState } from "react";
import {
  Container,
  FooterLeft,
  FooterRight,
  FooterItem,
  LanguageButton,
  ThemeButton,
  Languages,
  LanguageSelectButton,
  TopFooter,
} from "./styles";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppContext } from "../../helpers/appContext";
import { BiArrowFromTop, BiArrowFromBottom } from "react-icons/bi";
import { setSession } from "../../helpers/session";

export default function Footer() {
  const { darkTheme, setDarkTheme, language, setLanguage } = useAppContext();
  const [selectingLanguage, setSelectingLanguage] = useState(false);

  const setTheme = () => {
    setDarkTheme(!darkTheme);
    setSession({ theme: !darkTheme, language });
  };
  const selectLanguage = (language) => {
    setLanguage(language);
    setSession({ theme: darkTheme, language });
  };

  return (
    <Container>
      <TopFooter>
        <FooterLeft>
          <ThemeButton onClick={() => setTheme()}>
            {darkTheme ? <FaMoon size={16} /> : <FaSun size={16} />}
          </ThemeButton>
          <LanguageButton
            onClick={() => setSelectingLanguage(!selectingLanguage)}
          >
            <FooterItem>
              {language === "English" ? "Select language" : "Choisir la langue"}
            </FooterItem>
            {selectingLanguage ? (
              <BiArrowFromBottom size={16} />
            ) : (
              <BiArrowFromTop size={16} />
            )}
          </LanguageButton>
        </FooterLeft>
        <FooterRight>
          <FooterItem>Help</FooterItem>
          <FooterItem>Privacy</FooterItem>
          <FooterItem>Terms</FooterItem>
        </FooterRight>
      </TopFooter>
      <Languages>
        {selectingLanguage && (
          <>
            <LanguageSelectButton
              onClick={() => {
                selectLanguage("English");
              }}
              selected={language === "English"}
            >
              English
            </LanguageSelectButton>
            <LanguageSelectButton
              onClick={() => {
                selectLanguage("French");
              }}
              selected={language === "French"}
            >
              French
            </LanguageSelectButton>
          </>
        )}
      </Languages>
    </Container>
  );
}
