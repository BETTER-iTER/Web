import React, {useState, ChangeEvent} from "react";
import { styled } from "../../../stitches.config";
import { Caption4 } from "../Font";

interface TextInput {
    limit: number;
    placeholder: string;
}

const TextInput: React.FC<TextInput> = ({limit, placeholder}) => {
    const [text, setText] = useState<string>("");

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        if(inputValue.length <= limit ) {
            setText(inputValue);
        }
    };

    return (
        <>
            <textarea
                rows={5}
                cols={30}
                value={text}
                onChange={handleTextChange}
                placeholder={placeholder}
                style={{
                    width: "340px",
                    height: "150px",
                    padding: "10px",
                    gap: "10px",
                    border: "1px solid #EAEEF2",
                    borderRadius: "10px",
                    resize: "none",
                }}
            />
            <Length><Caption4>({text.length}/{limit})</Caption4></Length>
        </>
    );
};

export default TextInput;

const Length = styled("div", {
    marginTop: "-30px",
    marginLeft: "310px",
})