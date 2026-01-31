import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        setShow(true);
      }, 1000);
  }, []);
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
    <div className={`fade-in ${show ? "show" : ""}`}>
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
            >
              ログインページへ
            </a>
          </section>
      </main>
      </div>

      <footer>
        <p>2026 PINE3 All rights reserved.</p>
      </footer>
      </>
  );
}
export default App;
