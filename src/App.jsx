import "./App.css";
import AvatarGallery from "./components/AvatarGallery/AvatarGallery";
import CardHolder from "./components/AvatarGallery/CardHolder";
import Gallery from "./components/Gallery/Gallery";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  return (
    <div>
      <Gallery />
      <TodoList />
      <AvatarGallery />
      <CardHolder />
    </div>
  );
}
