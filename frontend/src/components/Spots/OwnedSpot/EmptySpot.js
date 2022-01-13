import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SpotForm from '../SpotFormModal/SpotForm';

function EmptySpot() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <main>
                <h2>Looks like you're not hosting any spots!</h2>
                <img src='https://i.kym-cdn.com/entries/icons/facebook/000/026/489/crying.jpg' alt="sad-cat" />
                <button onClick={() => setShowModal(true)}>Host a Spot Here</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SpotForm showModal={setShowModal} />
                    </Modal>
                )}
            </main>
        </>
    );
}

export default EmptySpot;
