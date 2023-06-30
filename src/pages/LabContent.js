import { useContext, useEffect, useState } from "react";
import { NavbarLab, Navbar } from "../components";
import LabHeader from "../components/LabHeader/LabHeader";
import { LabExplanation } from "../containers";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function LabContent() {
  const user = useContext(UserContext);
  const { title } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/labs/Fetchlab",
          { name: title }
        );
        setData(response.data);
        console.log("Fetched data:", response.data);
        setIsLoading(false); // Update loading state when data is fetched successfully
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Update loading state even if an error occurs
      }
    };

    fetchData();
  }, []);
  const imgbaseUrl = "http://localhost:5001/";
  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      {!isLoading && data.labs && (
        <>
          <LabHeader name={data.labs.name} img={`${imgbaseUrl}${data.labs.icon}`} />
          <LabExplanation
            headers={data.labs.headers}
            content={data.labs.headers_content}
            id={data.labs._id}
            container={data.labs.Containers}
          />
        </>
      )}
    </>
  );
}
