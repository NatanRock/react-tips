export const fetchify = (isFetched, content) => {
    if (!isFetched) {
        return (

            <div className = 'spinner'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }

    if (content) {
        return content;
    }

    return null;
};
