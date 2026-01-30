import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Scroll to top"
            style={{
                width: "48px",
                height: "48px",
                position: "fixed",
                right: "24px",
                bottom: "24px",
                zIndex: 1000,
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transition: "opacity 0.3s",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                background: 'var(--zinc-500)',
                color: "var(--primary-white)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}
        >
            ↑
        </button>
    );
}