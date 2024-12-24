export const Cursor = ({ top, left }) => {
    return (
        <div
            className="cursor"
            style={{
                top: `${top}px`,
                left: `${left}px`,
            }}
        ></div>
    );
};
