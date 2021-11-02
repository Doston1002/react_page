import React from 'react';
import Smartwatches from '../JSON/smarwatches.json';

const SmartWatch = () => {
    return (
        <div className="smartwatch">
            <div className="pageTitles">
                <p>Explore Awesome Products</p>
                <h4>Recommended For You</h4>
            </div>
            <div className="cards">
                {Smartwatches.map((post) => {
                    return(
                        <div className="productCard">
                            <img src={post.img} />
                            <p>{post.name}</p>
                            <div className="price">
                                {post.price}
                            </div>
                        </div>
                    )
                })}
            </div>
            <span className="buttonArea">
                <a href="#" className="exploreBtn">Explore Other Products</a>
            </span>
        </div>
    );
};

export default SmartWatch;