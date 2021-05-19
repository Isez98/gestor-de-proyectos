import React from 'react';
import DocumentButton from '../DocumentButton';
import './styles.css';

const AddDoc = ({setDocumentUpload, documentUpload, isDisabled}) => {

  const buttonClick = () => {
    document.querySelector(`#hiddenFile`).click();
  };

  const onFileChange = e => {
    setDocumentUpload(e.target.files[0])
  };

  return(
    <span>
      {
        isDisabled !=="" || documentUpload.name ? (
          <span>
            <input disabled id="fileButton" type="button" value="Subir documento" onClick={buttonClick}/>
            <input disabled type="file" style={{display: 'none'}} id="hiddenFile" name="hiddenFile" onChange={onFileChange}/>
            <label disabled id="file-name" htmlFor="fileButton">{documentUpload.name}</label>
            <DocumentButton />
          </span>
          ) : (
          <span>
            <input id="fileButton" type="button" value="Subir documento" onClick={buttonClick}/>
            <input type="file" style={{display: 'none'}} id="hiddenFile" name="hiddenFile" onChange={onFileChange}/>
            <label id="file-name" htmlFor="fileButton">{documentUpload.name}</label>            
          </span>
        )
      }      
    </span>
  );
};

export default AddDoc;