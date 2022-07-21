import "./App.css";
import FirstComponent from "./components/FirstComponent";
import JSXRuleTesting from "./components/JSXRules";
import TemplateExpression from "./components/TemplateExpression";
import EventTest from "./components/EventTest";
import Challenge from "./components/Challenge";
import AssetTest from "./components/AssetTest";
import HookUseState from "./components/HookUseState";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import PropTest from "./components/PropTest";
import PropChildren from "./components/PropChildren";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <JSXRuleTesting />
      <TemplateExpression />
      <EventTest />
      <Challenge />
      <AssetTest />
      <HookUseState />
      <ListRender />
      <ConditionalRender />
      <PropTest name="Calebe" />
      <PropChildren title="Testando children">Conteúdo interno</PropChildren>
      <UserDetails />
    </div>
  );
}

export default App;
