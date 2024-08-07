import styles from './styles.module.css'
import { useState } from "react";

export interface LinkProps {
    /** The text to be rendered as the anchor of the link */
    text: string;
    /** The URL to navigate to when the link is clicked */
    href: string;
    /** Whether the link is an internal or external navigation */
    internal?: boolean;
}


export default function Link({ text, href, internal=false }: LinkProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <a 
            className={styles.linkContainer}
            data-testid='link-container-test'
            href={href}
            target={internal ? '_self' : '_blank'} 
            rel="noreferrer"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            { 
                text.split('').map((char, index) =>
                    <span 
                        key={index}
                        data-testid={`link-char-${char}-${index}-test`}
                        className={styles.linkCharacter}
                        data-char={char}
                        style={{
                            transform: hovered ? 'translateY(1.2rem)' : 'translateY(0)',
                            transitionDelay: `${index * 0.0075}s`
                        }}
                    >
                        {char == ' ' ? <>&nbsp;</> : char}
                    </span>
                )
            }

        </a>
    )
}