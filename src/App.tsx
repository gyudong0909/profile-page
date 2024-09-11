import './App.css';


function App() {
  return (
    <>
      <header>
        <h1>박규동 프로필</h1>
      </header>
      <section className="profile">
        <img
          src="/path-to-your-image.jpg"
          alt="Profile Picture"
          className="profile-picture"
        />
        <h2>Gyudong Park</h2>
        <p>
          안녕하세요! 조선해양공학과 21학번 박규동입니다. 
          풀스택 개발자가 되는 것이 목표에요. 프론트엔드부터 차근차근 열심히 배워나갈 생각입니다. 잘 부탁드려요.
        </p>
        <h3>Contact Me</h3>
        <p>Email: gyudong0909@snu.ac.kr</p>
        <p>GitHub: <a href="https://github.com/gyudong0909" target="_blank" rel="noreferrer">github.com/gyudong0909</a></p>
      </section>
      <footer>
        <p>Built with React and Vite</p>
      </footer>
    </>
  );
}

export default App;
