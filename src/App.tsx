import { useTranslation } from 'react-i18next';
import { useRoutes } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { routes } from './routes';
import './i18n'; // Ajuste o caminho para o arquivo correto


// Componente LanguageSelector para mudar o idioma
function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
      <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
      <button onClick={() => i18n.changeLanguage('it')}>Italiano</button>
    </div>
  );
}

const App = () => {
  const elements = useRoutes(routes);

  return (
    <UserContextProvider>
      <LanguageSelector /> {/* Adiciona o componente LanguageSelector */}
      {elements}
    </UserContextProvider>
  );
}

export default App;
