import React from "react";
import BioForm from "./BioForm";

function Bio({ bio }) {

    return (
        <div>
            {bio ? <BioForm bio={bio} />: null}
        </div>
    )
}

export default Bio;