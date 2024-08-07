import * as react_jsx_runtime from 'react/jsx-runtime';

interface LinkProps {
    /** The text to be rendered as the anchor of the link */
    text: string;
    /** The URL to navigate to when the link is clicked */
    href: string;
    /** Whether the link is an internal or external navigation */
    internal?: boolean;
}
declare function Link({ text, href, internal }: LinkProps): react_jsx_runtime.JSX.Element;

export { Link };
