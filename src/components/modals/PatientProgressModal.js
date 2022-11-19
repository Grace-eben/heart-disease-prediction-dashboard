import React from 'react'

export const PatientProgressModal = (setOpenModal) => {
  return (
    <div className="modalBackground">
    
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
    Heloooo
 
  </div>
  )
}
