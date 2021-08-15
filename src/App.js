import React from "react";

import { StyledDiv } from "./styled.js";

class App extends React.Component {
  render() {
    return (
      <StyledDiv>
        <div class="back">
          <a href="http://www.fisherillustration.com" class="anchor illustration"><span class="imagewrap"></span></a>
          <a href="http://www.particle17.com" class="anchor comix"><span class="imagewrap"></span></a>
        </div>
      </StyledDiv>
    )
  }
}

export default App;
