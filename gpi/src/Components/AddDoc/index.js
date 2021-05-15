import React, { useState } from 'react';
import './styles.css';

const AddDoc = ({setDocument}) => {
  const [fileName, setFileName] = useState('');

  const buttonClick = () => {
    document.querySelector(`#hiddenFile`).click();
  };

  const onFileChange = e => {
    setFileName(e.target.files[0].name);
    setDocument(e.target.files[0])
  };

  return(
    <div>
      <input id="fileButton" type="button" value="Subir documento" onClick={buttonClick}/>
      <input type="file" style={{display: 'none'}} id="hiddenFile" name="hiddenFile" onChange={onFileChange}/>
      <label id="file-name" htmlFor="fileButton">{fileName}</label>
    </div>
  );
};

export default AddDoc;