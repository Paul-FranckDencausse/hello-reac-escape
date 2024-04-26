//c'est notre variable!
const user = {
  //nom
  name: "Charlie Chaplin",
  //lien
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Charlie_Chaplin.jpg",
  //taille
  imageSize: 90,
};
//composant
export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        // comme class en html (la classe quoi)
        className="avatar"
        // l'échappée belle en JS
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
