import Avatar from "./Avatar";
import "@fontsource/zen-kaku-gothic-new";
import "./TodoList.css";

const person = {
  name: "John Mauchly",
  srcStr: "j7mzYMi.jpeg",
  theme: {
    backgroundColor: "black",
    color: "orange",
    fontFamily: "Zen Kaku Gothic New",
    borderRadius: "10%",
  },
};

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return (
    <section style={person.theme}>
      <h2 style={{ paddingTop: "15px" }}>
        {person.name}&apos;s Todos for {formatDate(new Date())}
      </h2>
      <Avatar srcStr={person.srcStr} altTxt={person.name} />
      <div id="outer">
        <div id="inner">
          <ul>
            <li>
              <span>
                Design the first general-purpose electronic digital computer
              </span>
            </li>
            <li>
              <span>Start the first computer company</span>
            </li>
            <li>
              <span>Pioneer the concept of a programming language</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
