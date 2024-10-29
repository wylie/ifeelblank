import React, { useEffect, useState } from "react";
import Feeling from "../feeling";
import "./styled.css";

const FeelingsPast = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/v3/b/671cdf95e41b4d34e4491863", {
          headers: {
            "X-Master-Key": process.env.REACT_APP_API_KEY
          }
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result.record.feelings || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="message">Loading...</div>;
  }

  if (error) {
    return <div className="message error">Error: {error.message}</div>;
  }
  return (
    <div className="feelings_past" data-element="list">
      {data.map((index) => (
        <Feeling theme={"secondary"} kind={index.name} key={index.id} />
      ))}
    </div>
  );
};

export default FeelingsPast;