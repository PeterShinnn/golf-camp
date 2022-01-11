import './SpotDetail.css'

function ResultBox({ Course }) {
    return (
        <div key={Course.id} className="spot-card">
            <div className="grid-item">
                <img className="spot-img" src={Course.Images[0].url} alt="golf-course"></img>
                <h2>{Course.name}</h2>
            </div>
        </div>
    )
}

export default ResultBox;
