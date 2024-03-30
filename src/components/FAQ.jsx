import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <section className="mb-32 mt-24" id="faq">
      <div className="mx-auto mb-12 w-[60%]">
        <h2 className="text-center text-[36px] font-medium">
          Frequently asked questions
        </h2>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          width: "100%",
          padding: "8px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            How do I contact customer support if I have a question or issue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can reach our customer support team by emailing{" "}
            <span className="text-[#064079] underline">support@email.com</span>
            or calling our toll-free number. We're here to assist you promptly.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          width: "100%",
          padding: "8px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            Can I return the product if it doesn't meet my expectations?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! We offer a hassle-free return policy. If you're not
            completely satisfied, you can return the product within [number of
            days] days for a full refund or exchange.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          width: "100%",
          padding: "8px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            What makes your product stand out from others in the market?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our product distinguishes itself through its adaptability,
            durability, and innovative features. We prioritize user satisfaction
            and continually strive to exceed expectations in every aspect.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          width: "100%",
          padding: "8px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            Is there a warranty on the product, and what does it cover?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, our product comes with a [length of warranty] warranty. It
            covers defects in materials and workmanship. If you encounter any
            issues covered by the warranty, please contact our customer support
            for assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default FAQ;
