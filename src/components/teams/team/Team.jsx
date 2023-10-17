

const Team = ({ memberList }) => {

    const { _name, _quote, _image } = memberList;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={_image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{_name}</h2>
                <p>C{_quote}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}

export default Team