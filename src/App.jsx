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
            Vite
            <p>Next Generation Front End Tooling</p>
            <p>
              Get ready for a development environment that can finally catch up
              with you.
            </p>
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
          textbig="Instant Server Start"
          textsmall="On demand file serving over native ESM,
        no bundling required!"
        ></CardGenerator>
        <CardGenerator
          icon="🛠"
          textbig="Instant Server Start"
          textsmall="On demand file serving over native ESM,
        no bundling required!"
        ></CardGenerator>
        <CardGenerator
          icon="📦"
          textbig="Instant Server Start"
          textsmall="On demand file serving over native ESM,
        no bundling required!"
        ></CardGenerator>
        <CardGenerator
          icon="🔩"
          textbig="Instant Server Start"
          textsmall="On demand file serving over native ESM,
        no bundling required!"
        ></CardGenerator>
        <CardGenerator
          icon="🔑"
          textbig="Instant Server Start"
          textsmall="On demand file serving over native ESM,
        no bundling required!"
        ></CardGenerator>
      </div>
    </>
  );
}
