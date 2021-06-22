import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import SinglePagePDFViewer from "./components/pdf/singlePage";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      {/* <div>
        <SinglePagePDFViewer pdf={samplePDF} />
      </div> */}
    </>
  );
}

export default App;
