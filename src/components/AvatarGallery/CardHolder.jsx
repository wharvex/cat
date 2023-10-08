import Avatar2 from "./Avatar2";
import Card from "./Card";
import "./CardHolder.css";

export default function CardHolder() {
  return (
    <div className="cardHolder">
      <Card>
        <Avatar2
          size={200}
          person={{
            name: "Stephen Cole Kleene",
            imageId: "y83dMPX.jpeg",
          }}
        />
      </Card>
    </div>
  );
}
