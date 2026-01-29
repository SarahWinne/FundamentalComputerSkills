function AppIcon({ name, icon, variant="desktop" }) {
    return (

        <div className={`app-icon ${variant}`}>
            <img className="app-icon-image" src={icon} alt={name} />

            {/* Desktop shows name under icon, taskbar hides it */}
            {variant === "desktop" && (
                <div className="app-icon-name">{name}</div>
            )}

            {/* Tooltip for both desktop and taskbar */}
            <div className={`app-icon-tooltip ${variant}`}>{name}</div>

        </div>
        

    );
}

export default AppIcon;