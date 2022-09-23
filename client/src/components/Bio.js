import React from "react";
import BioForm from "./BioForm";

function Bio({ user }) {

    return (
        <div>
            {user ? <BioForm profile={user} />: null}
        </div>
    )
}

export default Bio;