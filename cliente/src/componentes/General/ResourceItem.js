import React from 'react'

const ResourceItem = ({ recursoItem }) => {
    const resourceIcons = {
        pdf: 'bi bi-file-earmark-pdf',
        excel: 'bi bi-file-earmark-spreadsheet',
        word: 'bi bi-file-earmark-word',
        video: 'bi bi-file-earmark-play',
        imagen: 'bi bi-file-image',
      };

  return (
    <div className='recurso-item shadow'>
      <i className={resourceIcons[recursoItem.type]}></i>
      <p>{recursoItem.name}</p>
    </div>
  )
}

export default ResourceItem;