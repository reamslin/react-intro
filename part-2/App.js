const App = () => (
    <div>
        <Tweet
            username='lreams'
            name="Lindsey"
            date="March 3, 2021"
            message="This is a tweet"
        />
        <Tweet
            username='babybeck'
            name="Beck"
            date="March 12, 2021"
            message="This is a tweet from a baby"
        />
        <Tweet
            username='coolfool'
            name="Nick"
            date="March 15, 2021"
            message="1989 was a great year for the Grateful Dead"
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));