import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import SpotForm from './SpotForm';

function SpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Link className="navLinks" to="#" onClick={() => setShowModal(true)}>Host a Spot</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm showModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default SpotFormModal;
