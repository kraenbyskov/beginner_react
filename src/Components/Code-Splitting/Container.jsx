const Container = (props) => {
    return (
        <div
            style={{
                backgroundColor: props.background,
                padding: "20px",
                margin: "20px auto",
                borderRadius: "16px",
                width: "50%",
            }}
        >
            {props.children}
        </div>
    );
};

export default Container;