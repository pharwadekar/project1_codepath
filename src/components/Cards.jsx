import React from 'react';
import './Cards.css'; // Assuming you have some CSS for styling

const Card = ({ imageUrl, restaurantName, onViewMenu }) => {
    const handleViewMenu = () => {
        window.open(onViewMenu, '_blank');
    };

    return (
        <div className="cards-container">
            <div className="card">
                <img src={imageUrl} alt={restaurantName} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{restaurantName}</h2>
                    <button onClick={handleViewMenu}>View Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Card;