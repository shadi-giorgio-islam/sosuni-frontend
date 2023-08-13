import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Exam from "./entity/Exam";
import Course from "./entity/Course";
import {generateUniversities} from "./function/GenerateUniversities";
import {useState} from "react";
import "./Accordion.css";


const universitiesData = generateUniversities(20, 30, 20);

// Componente per l'accordo dell'esame
interface ExamAccordionProps {
    exam: Exam;
}

const ExamAccordion: React.FC<ExamAccordionProps> = ({ exam }) => (
    <Accordion className="accordion-component">
        <AccordionSummary expandIcon={<ExpandMoreIcon className="accordion-icon" />} className="accordion-summary">
            <Typography>{exam.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Dettagli dell'esame: Data, risultati, ecc.
            </Typography>
        </AccordionDetails>
    </Accordion>
);

// Componente per l'accordo del corso
interface CourseAccordionProps {
    course: Course;
}

interface CourseAccordionProps {
    course: Course;
}

const CourseAccordion: React.FC<CourseAccordionProps> = ({ course }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <Accordion expanded={expanded} onChange={toggleExpanded} className="accordion-component">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="accordion-icon" />} className="accordion-summary">
                <Typography>{course.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Dettagli del corso: Descrizione, docenti, ecc.
                </Typography>
                {/* Nidificazione del componente Accordion per gli esami */}
                {expanded &&
                    course.exams.map((exam) => (
                        <ExamAccordion key={exam.id} exam={exam} />
                    ))}
            </AccordionDetails>
        </Accordion>
    );
};

const UniversityAccordion: React.FC = () => {
    const [expanded, setExpanded] = useState<number[]>([]); // Array di università espansi

    const handleExpand = (universityId: number) => {
        if (expanded.includes(universityId)) {
            setExpanded(expanded.filter((id) => id !== universityId));
        } else {
            setExpanded([...expanded, universityId]);
        }
    };

    return (
        <div className="accordion">
            {universitiesData.map((university) => (
                <Accordion
                    key={university.id}
                    expanded={expanded.includes(university.id)}
                    onChange={() => handleExpand(university.id)}
                    className="accordion-component"
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="accordion-icon" />} className="accordion-summary">
                        <Typography>{university.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Dettagli dell'università: Indirizzo, contatti, ecc.
                        </Typography>
                        {/* Nidificazione del componente Accordion per i corsi solo se l'università è espansa */}
                        {expanded.includes(university.id) &&
                            university.courses.map((course) => (
                                <CourseAccordion key={course.id} course={course} />
                            ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default UniversityAccordion;