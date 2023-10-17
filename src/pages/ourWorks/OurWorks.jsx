import { useEffect, useState } from "react";
import Works from "../works/Works";


const OurWorks = () => {

  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setWorks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 max-w-7xl mx-auto">
      {
        works.map(work => (<Works key={work.id} work={work}></Works>))
      }
    </div>
  )
}

export default OurWorks