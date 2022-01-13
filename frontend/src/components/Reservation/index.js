import './Reservation.css';

function Reservation() {
    //const reservation = [];

    return (
        <main>
            <div className="reservation-container">
                <div className="reservation-tab">
                    <h2>Reservation Information</h2>
                    <hr></hr>
                    <div className="reservation-item">You have no reservation</div>
                </div>
                <div>
                    <div className="reservation-course-info">
                        <img src="" alt="course-img"/>
                        <span className="reservation-time-place">
                            <h2>Name: </h2>
                            <h2>Address: </h2>
                            <h2>Time: </h2>
                        </span>
                        <div>
                            <h2>Course Details: </h2>
                            <p>Golf-Coruse-Info for the course you're reservered at</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Reservation
