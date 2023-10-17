import { useEffect, useState } from "react";
import Team from "./team/team";


const Teams = () => {

    const [member, setMember] = useState([]);

    useEffect(() => {
        fetch('client.json')
            .then(res => res.json())
            .then(data => setMember(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mt-24 max-w-7xl mx-auto bg-slate-400 p-10">
            <h2 className="text-5xl text-center font-bold">Our Team Members</h2>
            {/* <h2 className="text-5xl">Our Team Members</h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10" data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                {
                    member.map(memberList => (<Team key={memberList.id} memberList={memberList}></Team>))
                }
            </div>
        </div>
    )
}

export default Teams