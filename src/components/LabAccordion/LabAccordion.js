import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./LabAccordion.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import DownloadLab from "../DownloadLab/DownloadLab";
import FlagInput from "../FlagInput/FlagInput";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ConvertTextToHtmlComponent from "../ConvertTextToHtml/ConvertTextToHtml";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button type="button" className=" ButtonTxt" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

export default function LabAccordion({ headers, content ,id,container}) {
  return (
    <Accordion
      defaultActiveKey={["0", "5"]}
      className="accordionContainer"
      alwaysOpen
    >
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="0">
            {headers[0]}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="bodyText">
            <ConvertTextToHtmlComponent htmlString={content[0]} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="1">
            {headers[1]}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="bodyText">
            <ConvertTextToHtmlComponent htmlString={content[1]} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="2">
            {headers[2]}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="bodyText">
            <ConvertTextToHtmlComponent htmlString={content[2]} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="3">
            {headers[3]}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="bodyText">
            <ConvertTextToHtmlComponent htmlString={content[3]} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="4">
            {headers[4]}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="bodyText">
            <ConvertTextToHtmlComponent htmlString={content[4]} />
            <SyntaxHighlighter language="php" style={atomDark}>
              {content[5]}
            </SyntaxHighlighter>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="5">
            Practice Time{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5" className="practice">
          <Card.Body>
            <DownloadLab container={container}/>
            <FlagInput id={id}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
