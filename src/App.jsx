import viteLogo from "/vite.svg";
import "./App.css";
import Buttons from "./Components/buttons";
import CardGenerator from "./Components/cards";

export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="text-holder">
          <h1>
            <div className="gradient-title">
              <h2> Vite </h2>
            </div>
            <p>Next Generation </p>
            <p>Front End Tooling</p>
            <h5>
              Get ready for a development environment that can finally catch up
              with you.
            </h5>
          </h1>
        </div>
        <div className="logo-container">
          <p href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </p>
        </div>
      </div>
      <div className="button-container">
        <Buttons text="Get Started"></Buttons>
        <Buttons text="Why Vite?"></Buttons>
        <Buttons text="View on GitHub"></Buttons>
      </div>
      <div className="cards-container">
        <CardGenerator
          icon="💡"
          textbig="Instant Server Start"
          textsmall="On demand file serving over native ESM,
        no bundling required!"
        ></CardGenerator>
        <CardGenerator
          icon="⚡️"
          textbig="Lightning Fast HMR"
          textsmall="Hot Module Replacement (HMR) that stays fast regardless of app size."
        ></CardGenerator>
        <CardGenerator
          icon="🛠"
          textbig="Rich Features"
          textsmall="Out-of-the-box support for TypeScript, JSX, CSS and more."
        ></CardGenerator>
        <CardGenerator
          icon="📦"
          textbig="Optimized Build"
          textsmall="Pre-configured Rollup build with multi-page and library mode support."
        ></CardGenerator>
        <CardGenerator
          icon="🔩"
          textbig="Universal Plugins"
          textsmall="Rollup-superset plugin interface shared between dev and build."
        ></CardGenerator>
        <CardGenerator
          icon="🔑"
          textbig="Fully Typed APIs"
          textsmall="Flexible programmatic APIs with full TypeScript typing."
        ></CardGenerator>
      </div>
    </>
  );
}
