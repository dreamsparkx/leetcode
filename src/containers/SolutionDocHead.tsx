import React from 'react';
import SolutionType, { type as solutionType } from '../components/SolutionType';
import Tags from '../components/Tags';

type Props = {
    solutionType: solutionType;
    labels: string[];
    companies?: string[];
    url: string;
};

const SolutionDocHead: React.FunctionComponent<Props> = (props) => {
    const { solutionType, labels, companies, url } = props;
    return (<>
        <SolutionType type={solutionType} />
        <br />
        <br />
        <Tags labels={labels} />
        <br />
        {companies && companies.length > 0 && <>Companies:
            <Tags labels={companies} /><br/>
        </>}
        URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <br/>
        <br/>
    </>);
};

export default SolutionDocHead;
