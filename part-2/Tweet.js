const Tweet = (props) => (
    <div>
        <b>{props.username}</b> : {props.name}
        <p> {props.message}
            <br />
            <i>{props.date}</i>
        </p>
        <br />
    </div>
);