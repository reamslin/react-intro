const App = () => (
    <div>
        <Person name="Lindsey" age={27} hobbies={["overwatch", "nothing else"]} />
        <Person name="Beck" age={1} hobbies={["cars", "cows", "milk"]} />
        <Person name="Nick" age={27} hobbies={["Grateful Dead", "Jerry Garcia", "Billy Strings"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));