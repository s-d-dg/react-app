import classes from "./App.module.css";
import Content from "./components/content/content";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Content className={classes.layout}/>
    </>
  );
}

export default App;
