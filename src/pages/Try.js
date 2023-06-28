import React from "react";

const htmlString = `
    <main>
        <h1>Convert a String to HTML</h1>
        <p>Learn how to convert a string to HTML using JavaScript.</p>
        <ul>
        <br>
        <li>
          <h4>In-band SQLi :</h4> This type of SQL injection is of simple type and
          efficiency. This makes it the most common type of attack.
        </li>
        <li>
          <h4>Out-of-band SQLi:</h4> This type of attack is executed under
          two situations when attackers is not able to use the same medium
          to launch the attack as well as gathered informa
          tion or when a
          server is either very laggy or unstable to perform these certain
          types of actions.
        </li>
        
      </ul>
    </main>
`;

const convertStringToHTML = (htmlString) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, "text/html");

  return html.body;
};

const Try = () => {
  const body = convertStringToHTML(htmlString);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: body.innerHTML }}
      style={{ listStyleType: "disc", marginLeft: "1em" }}
    />
  );
};

export default Try;
