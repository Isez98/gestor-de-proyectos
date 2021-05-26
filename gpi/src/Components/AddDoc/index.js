import React from 'react';
import DocumentButton from '../DocumentButton';
import './styles.css';

const AddDoc = ({setDocumentUpload, documentUpload, projectFileName, guestMode }) => {

  const buttonClick = () => {
    document.querySelector(`#hiddenFile`).click();
  };

  const onFileChange = e => {
    setDocumentUpload(e.target.files[0])
  };

  return(
    <span>
      {
        (documentUpload.name) || projectFileName ? (
          <span>
            <input 
              disabled 
              id="fileButton" 
              type="button" 
              value="Subir documento" 
              onClick={buttonClick}
            />
            <input 
              type="file" 
              style={{display: 'none'}} 
              id="hiddenFile" 
              name="hiddenFile" 
              onChange={onFileChange}
            />
           
            <DocumentButton 
              projectFileName={projectFileName}
              documentUpload={documentUpload} 
              guestMode={guestMode}
              setDocumentUpload={setDocumentUpload}
              selectFile={buttonClick}
            />
          </span>
          ) : (
          <span>
            <input 
              disabled={guestMode}
              className="btn btn-outline-primary"
              id="fileButton" 
              type="button" 
              value="Subir documento" 
              onClick={buttonClick}
            />
            <input 
              type="file" 
              style={{display: 'none'}} 
              id="hiddenFile"               
              onChange={onFileChange}
            />         
          </span>
        )
      }
    </span>
  );
};

export default AddDoc;