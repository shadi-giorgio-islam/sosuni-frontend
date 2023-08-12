import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Exam from "./entity/Exam";
import Course from "./entity/Course";
import {generateUniversities} from "./function/GenerateUniversities";
import {useState} from "react";
import "./Accordion.css";


const universitiesData = generateUniversities(20);

// Componente per l'accordo dell'esame
interface ExamAccordionProps {
    exam: Exam;
}

const ExamAccordion: React.FC<ExamAccordionProps> = ({ exam }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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

const CourseAccordion: React.FC<CourseAccordionProps> = ({ course }) => {
    const [isExpanded, setIsExpanded] = useState(false); // Stato di espansione

    const handleExpand = () => {
        setIsExpanded(true); // Imposta lo stato di espansione su true al clic
    };

    return (
        <Accordion expanded={isExpanded} onChange={handleExpand}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{course.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Dettagli del corso: Descrizione, docenti, ecc.
                </Typography>
                {/* Nidificazione del componente Accordion per gli esami solo se l'accordo è espanso */}
                {isExpanded &&
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
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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