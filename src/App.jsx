import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimeline, faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { historyData } from "./data.js";

export default function App() {
    const [index, setIndex] = React.useState(0);

    function handleBack() {

    }

    function handleNext() {

    }

    return (
        <div className="app-container">
            <div className="header-container">
                <FontAwesomeIcon icon={faTimeline} className="header-icon" />
                <div className="header-details">
                    <h1 className="header-title">HistoryHub</h1>
                    <p className="header-sub">Discover the fascinating information about historical places in our world!</p>
                    <div className="header-divider"></div>
                </div>
                <FontAwesomeIcon icon={faBook} className="header-icon" />
            </div>
            <div>
                <div className="history-container">
                    <img src={historyData[index].img} alt={historyData[index].name} className="history-image" />
                    <div className="history-header">
                        <h1 className="history-title">{historyData[index].name}</h1>
                        <p className="history-count">Card <b>{index + 1}</b> of {historyData.length}</p>
                    </div>
                    <div className="next-back-container">
                        <button className="back-button" onClick={handleBack()}>Back</button>
                        <button className="next-button" onClick={handleNext()}>Next</button>
                    </div>
                    <div className="details-container">
                        <button className="details-button">View Details</button>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <h2 className="footer-title">Created by Mason Erickson</h2>
                <p className="footer-sub">History is the story of humanity!</p>
            </div>
        </div>
    )
}