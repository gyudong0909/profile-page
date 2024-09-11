import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>박규동 프로필</h1>
      </header>
      <h2>Gyudong Park</h2>
      <p>
        안녕하세요! 조선해양공학과 21학번 박규동입니다. 풀스택 개발자가 되는
        것이 목표입니다.
      </p>
      <p>프론트엔드부터 차근차근 열심히 배워나갈 생각입니다. 잘 부탁드려요.</p>
      <br /> {/* 줄 간격 추가 */}
      <h3>연락처</h3>
      <p>Email: gyudong0909@snu.ac.kr</p>
      <p>
        GitHub:{' '}
        <a
          href="https://github.com/gyudong0909"
          target="_blank"
          rel="noreferrer"
        >
          github.com/gyudong0909
        </a>
      </p>
      <footer>
        <p>와플 스튜디오 22.5기</p>
      </footer>
    </>
  );
}

export default App;
