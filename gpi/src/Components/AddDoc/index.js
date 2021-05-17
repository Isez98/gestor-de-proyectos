import React from 'react';
import './styles.css';

const AddDoc = ({setDocumentUpload, documentUpload}) => {

  const buttonClick = () => {
    document.querySelector(`#hiddenFile`).click();
  };

  const onFileChange = e => {
    setDocumentUpload(e.target.files[0])
  };

  return(
    <div>
      <input id="fileButton" type="button" value="Subir documento" onClick={buttonClick}/>
      <input type="file" style={{display: 'none'}} id="hiddenFile" name="hiddenFile" onChange={onFileChange}/>
      <label id="file-name" htmlFor="fileButton">{documentUpload.name}</label>
    </div>
  );
};

export default AddDoc;