import React from "react";
import HornedBeasts from "./HornedBeasts";
import beasts from "./data";

console.log(beasts);

class Main extends React.Component {
  render() {
    return (
      <>
        <h3>Horned Beasts</h3>

        {beasts.map((b) => (
          <HornedBeasts
            key={b._id}
            className="beasts"
            title={b.title}
            description={b.description}
            imageURL={b.image_url}
          />
        ))}
      </>
    );
  }
}

export default Main;
