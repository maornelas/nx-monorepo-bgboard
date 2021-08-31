const style = document.createElement('style');
style.textContent = `
bgboard-grid {
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}

bgboard-tile {
  border: solid 1px #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  min-width: 200px;
  color: inherit;
  text-decoration: none;
  margin: 0.5em;
}
bgboard-tile:hover {
  border-color: #5159ea;
}

bgboard-image-wrapper {
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #ccc;
}
bgboard-image-wrapper > img {
  max-width: 100%;
  min-height: 100%;
}

bgboard-tile-title {
  display: block;
  margin: 1em 0;
  text-align: center;
  font-weight: bold;
  font-size: 125%;
}

bgboard-tile-left-corner {
  display: block;
  float: left;
  margin: -0.5em 0 1em 0.5em;
}

bgboard-tile-right-corner {
  display: block;
  float: right;
  margin: -0.5em 0.5em 1em 0;
}
`;
document.body.appendChild(style);