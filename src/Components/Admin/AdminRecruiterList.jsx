function AdminRecruiter(){
    const recruiter_arr=[
    {
        img:"daya.jpg",
        name: 'Dayanand Dubey',
        email: 'webrocks2024@gmail.com',
        contact: '8528952310',
        location: 'Azamgarh',
        blockBtn: 'Block',
    },
    {
        img:"daya.jpg",
        name: 'Dayanand Dubey',
        email: 'webrocks2024@gmail.com',
        contact: '8528952310',
        location: 'Azamgarh',
        blockBtn: 'Block',
    },
    {
        img:"daya.jpg",
        name: 'Dayanand Dubey',
        email: 'webrocks2024@gmail.com',
        contact: '8528952310',
        location: 'Azamgarh',
        blockBtn: 'Block',
    },
    {
        img:"daya.jpg",
        name: 'Dayanand Dubey',
        email: 'webrocks2024@gmail.com',
        contact: '8528952310',
        location: 'Azamgarh',
        blockBtn: 'Block',
    },
    
    ]

    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                {
                    recruiter_arr.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4 seeker_list my-2 mx-2" key={index}>
                            <div className="card p-2 h-100">
                                <div className="text-center">
                                    <img className="seeker_img img-fluid rounded-circle" src={item.img} alt={item.name} style={{ maxWidth: '100px', height: '100px' }} />
                                </div>
                                <div className="seeker_name text-center mt-2 font-weight-bold">{item.name}</div>
                                <table className="table table-borderless mt-3">
                                    <tbody>
                                        <tr>
                                            <td className="text-right font-weight-bold">Email:</td>
                                            <td className="text-left">{item.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">Contact:</td>
                                            <td className="text-left">{item.contact}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">Location:</td>
                                            <td className="text-left">{item.location}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center mt-auto">
                                    <button className=" seeker_btn ">{item.blockBtn}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default AdminRecruiter
