import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

export const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="relative">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="fixed bottom-12 right-6 z-20 w-12 h-12 text-white bg-black rounded-full border-2 border-white transition-all"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};