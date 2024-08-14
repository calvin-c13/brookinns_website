import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Hendrix = () => {
    const side = 'West';
    const community = 'Roth';
    const hall = 'Hendrix';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Hendrix;