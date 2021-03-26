const Person = (props) => {
    let message;
    if (props.age >= 18) {
        message = <span>Please go vote</span>
    } else {
        message = <span>You must be 18</span>
    };
    return (
        <div>
            <b>name: </b>{props.name} <br />
            <b>age: </b> {props.age} <br />
            <b>message: </b> {message} <br />
            <b>Likes: </b>
            <ul>
                {props.hobbies.map(i => <li>{i}</li>)}
            </ul>
            <br />
        </div>
    )
}