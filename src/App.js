import React, {useState} from 'react';
import './App.scss';



function App() {
  return (
    <div className="container">
      <h1 className="header">File Gadget</h1>
      <Folder name="Music">
        <File name="metalmix.mp3" />
        <File name="doom16.mp3" />
      </Folder>
      <Folder name="Pictures">
        <File name="kittycat.jpg" />
        <File name="doggo.jpg" />
        <File name="giantcrocodile.jpg" />
      </Folder>
      <Folder name="GIFs">
        <File name="gas_gas_gas.gif" />
        <File name="wink_and_smile.gif" />
        <File name="running_away.gif" />
      </Folder>
      <Folder name="Videos">
        <File name="Git_Tutorial_-_18_-_Pushing_to_a_GitHub_Repository.mp4" />
        <File name="Reviewing_Your_Code_-_#1.mp4" />
        <File name="Colt's_Code_Camp_Day_2.mp4" />
      </Folder>
      <Folder name="Applications">
        <File name="VSCode.exe" />
        <File name="GooooogleChrome.exe" />
        <File name="fileconverter.exe" />
        <File name="paint.exe" />
      </Folder>
    </div>
  );
}



function Folder(props) {
  const { name, children } = props;
  const [ isOpen, setIsOpen ] = useState(true);

  const borderStyle = { border: '1px dashed sienna' };
  const filePadding = { marginLeft: '24px' };

  const handleClick = () => setIsOpen(!isOpen);
  
  return (
    <div style={borderStyle}>
      <h3 className="subhead">
        <span onClick={handleClick}>
          <i className="folder icon customIconColor"></i>
          <i className={isOpen ? "caret down icon customIconColor" : "caret right icon customIconColor"}></i>
          {name}
        </span>
      </h3>
      <div style={filePadding} className="pageText">
        {isOpen ? children : null}
      </div>
    </div>
  );
}



function File(props) {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3: "music",
    jpg: "file image",
    gif: "file video",
    mp4: "video",
    exe: "code"
  }

  return (
    <div><i className={`${fileIcons[fileExtension]} icon customIconColor`}></i>{name}</div>
  );
}



export default App;