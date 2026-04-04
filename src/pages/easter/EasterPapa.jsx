import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { EasterTask } from "./EasterTask";

export default function EasterPapa() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id == "") {
            navigate("/easter/papa/1");
        }
    }, [id, navigate]);

    switch (id) {
        case "1":
            return <EasterTask url="eastern/papa" text="Gucke Im Geheimen Buch nach" task="Wie heißt der hauptcharakter" ans="Leo" id = "1" />
        case "2":
            return <h1>ttt</h1>;
        default:
            return null;
    }
}