import React, { useState } from "react";
import "../App.css";

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p>
	{isReadMore ? text.slice(0, 300) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="container">
        <h2>
            <ReadMore>
                Grow your business with a card machine and enjoy no rental fees, low transaction rates and next-level support. 
                Small businesses like yours are the powerhouse of our economy. That is why we make starting, managing and growing a business as easy as possible.
                From low rates and fees that give you more room to breathe, to business tools that make business management a breeze, 
                to reliable support, we go out of our way to simplify everything so you can focus on the important stuff, growing your business!
            </ReadMore>
        </h2>
	</div>
);
};

export default Content;
