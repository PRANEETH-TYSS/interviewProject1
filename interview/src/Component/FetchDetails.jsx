import React, { useState, useEffect } from "react";
import Axios from "../Axios";

const FetchDetails = () => {
  let [state, setState] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [search, setSearch] = useState("");
  let [Ascending, setAscending] = useState([]);
  let [descending, setDescending] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let values = await Axios.get("/posts");
      let { data } = values;
      setState(data);
      setFiltered(data);
    };
    fetchData();
  }, [state]);
  let AsendingDetails = () => {
    let asc = state.sort((a, b) => {
      return a.id - b.id;
    });
    setAscending(asc);
    console.log(asc);
  };
  let DesendingDetails = () => {
    let des = state.sort((a, b) => {
      return b.id - a.id;
    });
    setDescending(des);
    console.log(des);
  };
  let fetchdata = state.map(e => {
    return (
      <>
        <h1>{e.title}</h1>
      </>
    );
  });

  let searchElement = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="items-center">
      <input
        type="text"
        placeholder="search title"
        className="h-10 w-[500px] mt-5 mx-[250px] rounded-md"
        onChange={searchElement}
      />
      <div className="pt-7  flex justify-around">
        <button
          className="bg-blue-600 hover:bg-blue-300 p-2 rounded-md"
          onClick={AsendingDetails}
        >
          Asending
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-300 p-2 rounded-md"
          onClick={DesendingDetails}
        >
          Desending
        </button>
      </div>
      <table className="mx-[200px]">
        <tr>
          <h1 className="font-bold">Title</h1>
        </tr>
        {search === "" ? (
          <tr>
            <td className="capitalize bottom-3">{fetchdata}</td>
          </tr>
        ) : (
          filtered
            .filter(val =>
              val.title.toLowerCase().includes(search.toLowerCase())
            )
            .map(val => <h1>{val.title}</h1>)
        )}
      </table>
    </div>
  );
};

export default FetchDetails;
