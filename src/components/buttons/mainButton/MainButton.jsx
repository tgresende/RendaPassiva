
import React from "react";


import Button from "./styles";

const MainButton = ({
    text= "default text",
}
) =>{

    return(
        <div>
            <Button>
                {text}
            </Button>
        </div>
    );
}

export default MainButton;