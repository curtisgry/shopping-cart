import React from 'react' 

export default function Modal({isOpen, total, closeModal}) {
    return (
        <div className={`modal-container ${isOpen && "modal-container-open"}`}>
        <div className={`modal ${isOpen && "modal-open"}`}>
            <h2>{Number(total) !== 0.00 ?  "Thank you for shopping!" : "Please add items to cart" }</h2>
            {Number(total) !== 0.00 && <p>Your total was - ${total}</p> }
            <button className="btn" onClick={closeModal}>Close</button>
        </div>
        </div>
    )
}