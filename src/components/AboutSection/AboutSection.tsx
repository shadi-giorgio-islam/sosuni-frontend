import Typography from "@mui/material/Typography";
import React from "react";
import {Card, CardContent} from "@mui/material";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
    return (
        <Card className="cardAbout">
            <CardContent>
                <h1 className="titoloAboutPage">Che cos'è S.O.S UNI?</h1>
                <Typography variant="h4" className="contentAbout">
                    Benvenuti su S.O.S UNI, il portale online per studenti universitari. Qui troverai gruppi di studio dedicati a ciascun esame, creati appositamente per condividere appunti, discutere concetti e collaborare nell'affrontare le sfide accademiche. Esplora pure il nostro blog informativo per ottenere preziosi consigli, risorse e notizie sul mondo universitario. Unisciti a noi e ottieni il supporto di una comunità di studio focalizzata sui tuoi esami!
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AboutSection;