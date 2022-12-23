import React from "react";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Main</h3>
        <HornedBeasts
          title="Beast 1"
          description="Beast Number 1"
          imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        />
        <HornedBeasts
          title="Beast 2"
          description="Beast Number 2"
          imageURL="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
        />
      </div>
    );
  }
}

export default Main;
