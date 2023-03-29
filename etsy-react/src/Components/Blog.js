import React, { useEffect, useState } from "react";

function Blog() {
  const [blog,setBlog] = useState([]);

  useEffect(() => {
    fetch("./Blog.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
      setBlog(data);
      });
  }, []);

  return (
    <div className="content-add">
      <div className="blog-text">
        <h2>Fresh from the blog </h2>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="add-card">
        {blog.map((item) => {
          return (
            <div className="fresh-blog" key={item.img}>
              <img src={item.img} />

              <div className="add-text">
                <span>{item.title}</span>
                <h3>{item.heading}</h3>
                <p>{item.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
