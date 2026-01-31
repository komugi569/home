import "./style.css";

function App() {
  return (
    <>
    <header>
      <h1>PINE3</h1>
      <p>未来を繋ぐプラットフォーム</p>
      </header>

      <main>
        <section className="card">
          <h2>About</h2>
          <p>PINE3は新感覚のプラットフォームです。</p>
          </section>          
          
        <section className="card">
          <h2>Features</h2>
          <ul>
            <li>新感覚のインターフェース</li>
            <li>高速な処理速度</li>
            <li>セキュリティ強化</li>
          </ul>
          </section>
          
          <section>
            <h2>リンク</h2>
            <a
            href="https://login.pine-online.net"
            target="_blank"
            rel="noopener noreferrer"
            >ログインページへ
            </a>
          
          </section>

      </main>

      <footer>
        <p>2026 PINE3 All rights reserved.</p>
      </footer>
      </>
  );
}
export default App;
