import React from "react";

const Home = props => {
  return (
    <section className="home">
      <h2 className="home__title">What`s Project Ninja?</h2>
      <p className="home_txt">
        ひっそりとブログやツールを更新していくでござる。<br />
        JS関係多めかも。
      </p>
      <ul className="home__index">
        <li className="home__index-item">articles: ブログ的な何か</li>
        <li className="home__index-item">tools: 自作のツール</li>
        <li className="home__index-item">etc: その他。コンタクトなど</li>
      </ul>
      <div className="profile">
        <h3 className="profile__title">Profile</h3>
        <p className="profile__txt">
          Webの世界にひっそりと存在する忍者でござる。<br />
          まだまだ修行の身...
        </p>
      </div>
    </section>
  );
}

export default Home;