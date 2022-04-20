import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

type Props = {
    labels: string[];
};

const Tags: React.FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const { labels } = props;
    return (
        <div className={classes.root}>
            {labels.map((label, index) => {
                return (
                    <Chip label={label} key={`${index}-${label}`}/>
                );
            })}
        </div>
    );
};

export default Tags;