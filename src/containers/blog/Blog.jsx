import React from "react";
import Article from "../../components/article/Article";
import blog02 from "../../assets/blog02.jpeg";
import blog03 from "../../assets/blog03.jpeg";
import blog04 from "../../assets/blog04.jpeg";
import blog05 from "../../assets/blog05.png";
import "./blog.css";

const Blog = () => (
  <div className="gp__blog section__padding" id="blog">
    <div className="gp__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>

    <div className="gp__blog-container">
      <br />
      <div className="gp__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Apr 16, 2016"
          text=" The right to freedom of information vs the right to information privacy."
          url="https://www.theguardian.com/news/2016/apr/16/panama-papers-inside-the-guardians-investigation-into-offshore-secrets"
        />
        <Article
          imgUrl={blog05}
          date="Sep 15, 2022"
          text="A hacker used a compromised Uber EXT account to access the company's internal systems"
          url="https://www.uber.com/newsroom/security-update/"
        />
        <Article
          imgUrl={blog04}
          date="March 31, 2023"
          text="Recent Cyber Attacks, Data Breaches & Ransomware Attacks March 2023"
          url="https://www.cm-alliance.com/cybersecurity-blog/recent-cyber-attacks-data-breaches-ransomware-attacks-march-2023"
        />
        <Article
          imgUrl={blog03}
          date="Dec 16, 2022"
          text="6 Best Practices to Conduct a User Access Review"
          url="https://www.ekransystem.com/en/blog/user-access-review"
        />
      </div>
    </div>
  </div>
);

export default Blog;
