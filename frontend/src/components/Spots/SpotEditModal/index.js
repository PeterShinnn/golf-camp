import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import SpotEditForm from './SpotEditForm';

function SpotEditModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button >
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotEditForm showModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default SpotEditModal;
