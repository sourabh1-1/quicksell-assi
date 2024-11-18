import React, { useEffect, useState } from "react";
import Board from "../components/board/Board";
import DropDown from "../components/dropdown/DropDown";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [groupedData, setGroupedData] = useState(null);
  const [view, setView] = useState({ sortBy: "title", groupBy: "userId" });
  const fetchData = async () => {
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    if (localStorage.getItem("view")) {
      setView(JSON.parse(localStorage.getItem("view")));
    }
  }, []);
  function groupAndSortTickets(tickets, groupBy, sortBy) {
    const groupedTickets = tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});

    for (const key in groupedTickets) {
      groupedTickets[key].sort((a, b) => {
        if (sortBy === "priority") {
          return a.priority - b.priority; // Sort by priority (ascending)
        } else if (sortBy === "title") {
          return a.title.localeCompare(b.title); // Sort by title (alphabetical order)
        }
      });
    }
    return groupedTickets;
  }

  useEffect(() => {
    if (data) {
      setGroupedData(
        groupAndSortTickets(data["tickets"], view.groupBy, view.sortBy)
      );
    }
  }, [data, view]);
  useEffect(() => {
    fetchData();
  }, []);
  if (!groupedData) {
    return <div>Loading</div>;
  } else {
    if (view.groupBy === "status") {
      return (
        <>
          <DropDown view={view} setView={setView} />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {["Backlog", "Todo", "In Progress", "Done", "Cancelled"].map(
              (ele) => {
                return (
                  <Board
                    key={ele}
                    data={groupedData[ele] ? groupedData[ele] : []}
                    title={ele}
                  />
                );
              }
            )}
          </div>
        </>
      );
    } else if (view.groupBy === "userId") {
      return (
        <>
          <DropDown view={view} setView={setView} />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {data?.users.map((ele) => {
              return (
                <Board
                  key={ele["id"]}
                  title={ele["name"]}
                  data={groupedData[ele["id"]] ? groupedData[ele["id"]] : []}
                />
              );
            })}
          </div>
        </>
      );
    } else {
      return (
        <>
          <DropDown view={view} setView={setView} />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {[
              { title: "No priority", value: 0 },
              { title: "Urgent", value: 4 },
              { title: "High", value: 3 },
              { title: "Medium", value: 2 },
              { title: "Low", value: 1 },
            ].map((ele, idx) => {
              return (
                <Board
                  key={ele.value}
                  data={groupedData[ele.value] ? groupedData[ele.value] : []}
                  title={ele.title}
                />
              );
            })}
          </div>
        </>
      );
    }
  }
}
