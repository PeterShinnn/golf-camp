import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import SpotForm from './SpotForm';

function SpotEditModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Link className="navLinks" to="#" onClick={() => setShowModal(true)}>Host a Spot</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm />
                </Modal>
            )}
        </>
    );
}

export default SpotEditModal;
