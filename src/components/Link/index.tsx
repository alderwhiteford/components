import { useState } from "react";
import { LinkCharacter, LinkContainer } from "./styles";

interface LinkProps {
    /** The text to be rendered as the anchor of the link */
    text: string;
}


export default function Link({ text }: LinkProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <LinkContainer 
            href='https://whiteford.work'
            target='_blank'
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            { 
                text.split('').map((char, index) =>
                    <LinkCharacter 
                        key={index} 
                        $char={char} 
                        $hovered={hovered}
                        $delay={index * 0.0}
                    >
                        {char == ' ' ? <>&nbsp;</> : char}
                    </LinkCharacter>
                )
            }
        </LinkContainer>
    )
}