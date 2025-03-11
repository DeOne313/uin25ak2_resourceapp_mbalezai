const Arbeidskrav1 = () => {
    return (
      <main>
        <button id="knpHTML" onClick={HTMLmap}>HTML</button>
        <button id="knpCSS" onClick={CSSmap}>CSS</button>
        <button id="knpJScript" onClick={JavaScriptmap}>JavaScript</button>
        <button id="knpReact" onClick={Reactmap}>React</button>
        <button id="knpSHCMS" onClick={SHCMSmap}>Sanity and Headless CMS</button>
  
        <section>
          <nav id="main"></nav>
        </section>
      </main>
    );
  };