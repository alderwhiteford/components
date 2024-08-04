interface TestProps {
    /** Something here */
    test: string;
    /** Something else here */
    somethingElse: string;
}

/** A react component */
const Test: React.FC<TestProps> = ({ test, somethingElse }) => {
    return (
        <div title='test' data-id={somethingElse}>
            {test}
        </div>
    );
};

export default Test
