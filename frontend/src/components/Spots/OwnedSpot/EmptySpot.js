import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SpotForm from '../SpotFormModal/SpotForm';

function EmptySpot({loaded}) {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <div className="empty-container" style={{"display": loaded ? "none":""}}>
                <h2>Looks like you're not hosting any spots!</h2>
                <img src='https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="golf-ball" />
                <button onClick={() => setShowModal(true)}>Host a Spot Here</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SpotForm showModal={setShowModal} />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default EmptySpot;
