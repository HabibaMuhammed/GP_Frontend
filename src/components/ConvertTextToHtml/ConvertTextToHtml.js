import React from "react";

const ConvertTextToHtml = ({ htmlString }) => {
  const convertStringToHTML = (htmlString) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, "text/html");

    return html.body;
  };

  const body = convertStringToHTML(htmlString);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: body.innerHTML }}
      style={{ listStyleType: "disc", marginLeft: "1em" }}
    />
  );
};


const ConvertTextToHtmlComponent = ({ htmlString }) => {
    return <ConvertTextToHtml htmlString={htmlString} />;
  };
  

export default ConvertTextToHtmlComponent;
