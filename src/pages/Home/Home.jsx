import styles from "./Home.module.scss";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/homepage-hero.png";


function Home() {
  return (
    <>

      <Hero
        type="home"
        heroImg={heroImg}
        title="Chez vous, partout et ailleurs"
      />

    <div className={styles.main}>


      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  
  </>
  );

}


export default Home;
