import Avatar from "./Avatar2";

export default function AvatarGallery() {
  return (
    <section style={{ marginTop: "30px" }}>
      <h2>Avatar Gallery</h2>
      <Avatar
        size={100}
        person={{
          name: "Edgar F. Codd",
          imageId: "vOnDgvr.jpeg",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "James Cooley",
          imageId: "vzMHXL9.jpeg",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "J. Presper Eckert",
          imageId: "LvEdYmQ.png",
        }}
      />
    </section>
  );
}
