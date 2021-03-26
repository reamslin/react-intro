const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Lindsey" />
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById("root"));