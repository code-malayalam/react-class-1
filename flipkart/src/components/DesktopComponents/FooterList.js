import React, { useEffect, useState } from "react";
import "./FooterList.css";

function FooterList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setListData(json.footerList);
    };
    fetchData();
  }, [setListData]);

  return (
    <>
      {/* <div className="footer_list"> */}
      {listData.map((item) => {
        return (
          <div className="footer_list_container" key={item.text}>
            <div className="item_heading">{item.text}</div>
            <div className="item_lists">
              {item.lists.map((list, index) => {
                return (
                  <a href="#" key={index}>
                    {list}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
}
export default FooterList;
