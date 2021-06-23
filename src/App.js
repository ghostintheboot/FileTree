import React, {useState} from 'react';


function App() {
  return (
    <div>
      <h1>File Gadget</h1>
      <Folder name="Music">
        <File name="kitty.mp3" />
        <File name="doom16.mp3" />
      </Folder>
      <Folder name="Pictures">
        <File name="kittycat.jpg" />
        <File name="doggo.jpg" />
        <File name="yo_mama_lol.jpg" />
      </Folder>
      <Folder name="Application">
        <File name="VSCode.exe" />
        <File name="GooooogleChrome.exe" />
        <File name="cryptoexchange.exe" />
        <File name="GIMP.exe" />
      </Folder>
    </div>
  )
}


function Folder(props) {
  const { name, children } = props;
  const [ isOpen, setIsOpen ] = useState(true);

  const borderStyle = { border: '2px dashed blue' };
  const filePadding = { marginLeft: '24px' };

  const handleClick = () => setIsOpen(!isOpen);
  
  return (
    <div style={borderStyle}>
      <h3>
        <span onClick={handleClick}>
          <i className="blue folder icon"></i>
          <i className={isOpen ? "caret down icon" : "caret right icon"}></i>
          {name}!
        </span>
      </h3>
      <div style={filePadding}>
        {isOpen ? children : null}
      </div>
    </div>
  )
}


function File(props) {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3: "music",
    jpg: "file image",
    exe: "code"
  }

  return (
    <div><i className={`${fileIcons[fileExtension]} icon`}></i>{name}</div>
  );
}


export default App;
