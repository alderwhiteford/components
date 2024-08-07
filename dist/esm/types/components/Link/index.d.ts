export interface LinkProps {
    /** The text to be rendered as the anchor of the link */
    text: string;
    /** The URL to navigate to when the link is clicked */
    href: string;
    /** Whether the link is an internal or external navigation */
    internal?: boolean;
}
export default function Link({ text, href, internal }: LinkProps): import("react/jsx-runtime").JSX.Element;
