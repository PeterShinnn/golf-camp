import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Link className="navLinks" to="" onClick={() => setShowModal(true)}>Sign up</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupFormPage />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;
