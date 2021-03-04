
import React from "react";

import {Input} from "./styles";

const TextInput = ({
    marginBottom=24,
    placeholder="",
    maxWidth=200
}) =>{

    return(
            <Input 
                marginBottom={marginBottom}
                placeholder={placeholder}
                maxWidth={maxWidth}
            />
    );
}

export default TextInput;