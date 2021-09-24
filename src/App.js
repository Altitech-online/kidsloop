import { useState } from "react";
import Routes from "./Routes";
import PageContainer from "./components/PageContainer/PageContainer";
import Footer from "./components/Footer/Footer";
import { AppContainer } from "./styles";
import { AppContext } from "./helpers/appContext";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./themes";
import { getSession } from "./helpers/session";

function App() {
  const [darkTheme, setDarkTheme] = useState(getSession("theme", false));
  const [language, setLanguage] = useState(getSession("language", "English"));
  const [user, setUser] = useState();

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <AppContainer className="App">
        <AppContext.Provider
          value={{
            darkTheme,
            setDarkTheme,
            language,
            setLanguage,
            user,
            setUser,
          }}
        >
          <PageContainer>
            <Routes />
            <Footer />
          </PageContainer>
        </AppContext.Provider>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
