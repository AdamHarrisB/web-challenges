import "./styles.css";

export default function App() {
  return <article>
    <h2 className = "article_title">This is the article</h2>
    <label htmlFor="typebox">This is an input </label>
    <input id="typebox"></input>
    <a className="article_link" href="https://en.wikipedia.org/wiki/Main_Page">Click here!</a>
  </article>;
}
