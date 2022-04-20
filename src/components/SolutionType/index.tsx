import React from 'react';
import styles from './styles.module.css';

export type type= 'easy' | 'medium' | 'hard';

type Props = {
    type: type;
};

const SolutionType: React.FunctionComponent<Props> = (props) => {
    const { type } = props;
    let text: string = '';
    switch(type) {
        case 'medium':
            text = 'Medium';
            break;
        case 'hard':
            text = 'Hard';
            break;
        default:    //easy
            text = 'Easy';
            break;
    }
    return (
        <span className={styles[type]}>{text}</span>
    );
};

export default SolutionType;
