import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons'; 

const DocumentButton = ({ fileName }) => {

  // const buttonClick = () => {
  //   document.querySelector(`#fileBtnDrop`).click();
  // };
  
  return(
    <span>
      <span id="file__span-container">        
        <button id="fileBtnDrop" type="button" className="w-25 btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="font-weight-bolder"><u>{fileName}</u></span>
          <span>•••</span>
        </button>
        <span className="dropdown-menu dropdown-menu-right">
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <div className="pl-1">
              <FontAwesomeIcon className="w-25 mr-1" icon={faCopy} />
              <span className="pr-3 w-50 text-left">Reemplazar</span>              
            </div>
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <div className="pl-1">
              <FontAwesomeIcon className="w-25 mr-1" icon={faTrash} />
              <span className="pr-3 w-50 text-left">Borrar</span>              
            </div>
          </a>
          {/* eslint-disable-next-line */}
          <a className="dropdown-item" href="#">
            <div className="pl-1">
              <FontAwesomeIcon className="w-25 mr-1" icon={faDownload} />
              <span className="pr-3 w-50 text-left">Descargar</span>              
            </div>
          </a>
        </span>
      </span>
    </span>
  );
}

export default DocumentButton;