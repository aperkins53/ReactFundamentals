const Contacts = (props) => {
    return(
        <div className="main">
            <h3>{ props.name }</h3>
            <p>{ props.age }</p>
            <p>{ props.school }</p>
            <p>{ props.graduationYear }</p>
        </div>
    )
}

export default Contacts;