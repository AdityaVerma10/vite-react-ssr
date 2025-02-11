import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/test`);
      const data = await res.json();
      setData(data.message);
    };
    getData();
  }, []);
  return (
    <div>
      about
      <p>{data}</p>
    </div>
  );
}

export default About;
