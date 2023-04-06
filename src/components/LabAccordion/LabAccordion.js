import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./LabAccordion.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import DownloadLab from "../DownloadLab/DownloadLab";
import FlagInput from "../FlagInput/FlagInput";

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

export default function LabAccordion() {
  return (
    <Accordion
      defaultActiveKey={["0", "5"]}
      className="accordionContainer"
      alwaysOpen
    >
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="0">
            1. Introduction
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="bodyText">
            SQL stands for (Structure Query Language), this language is a
            backend language that helps in managing the database, this language
            can edit the database and further can retrieve it, and also can
            update, delete, and create a new database data is stored in the
            database in the form of tables, row, and columns.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="1">
            2. What's SQL injection?
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="bodyText">
            SQL Injection is a vulnerability that occurs when an attacker can
            fetch information from the SQL Database. This is usually the
            information they shouldn't have access to. It could range from
            access to credentials and sensitive tokens to bypassing
            authentication, exfiltrating data, and installing back doors.Only
            SQL-type databases are vulnerable to this attack, called a SQLi
            Vulnerability. A SQL injection can occur by insertion or “injection”
            of a SQL query via the input data from the client to the
            application. If a web application accepts a web form, input
            parameter (e.g., Search Query), cookie, etc., without validating and
            passing them directly to the database server. The database server
            interprets the input as code rather than data and ends up executing
            it. It can have severe consequences .
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="2">
            3. How can SQL Injection harm ?{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="bodyText">
            SQL injection is a critical vulnerability that needs to be fixed as
            fast as possible, not only it harms goodwill but it also harms user
            experience. It is such a critical vulnerability that the national
            vulnerability database has given it a 9.8 (critical) score. Any
            hacker can dump all the content present in the database by just some
            simple clicking A successful SQL injection exploit can read
            sensitive data from the database, modify database data
            (Insert/Update/Delete), execute administration operations on the
            database (such as shutdown the DBMS), recover the content of a given
            file present on the DBMS file system and in some cases issue
            commands to the operating system.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="3">
            4. Types of SQL Injection{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="bodyText">
            There are basically 3 types of SQL injection subcategorized into two
            category: 1.In-band SQLi : This type of SQL injection is of simple
            type and efficiency. This makes it the most common type of attack.
            This is also categorized into 2 categories: -Error-based SQLi:
            -Union-based SQLi: -Boolean SQLi 3.Out-of-band SQLi: This type of
            attack is executed under two situations when attackers is not able
            to use the same medium to launch the attack as well as gathered
            information or when a server is either very laggy or unstable to
            perform these certain types of actions.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="4">
            5. SQL Injection prevention{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="bodyText">
            Some of the ways to protect yourself against SQL Injection are:
            <br />
            1.Input Validation and Sanitation.
            <br /> 2.Use Prepared Statements with Parameterized queries. 3.
            Continuous Scanning and Penetration Testing 4. Restrict Privileges
            on database
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="5">
            6. Practice Time{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5" className="practice">
          <Card.Body>
            <DownloadLab />
            <FlagInput />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
