import React from 'react';
import Link from 'next/link'
import AwardPool from '../components/AwardPool';

class Target extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Link href="/index">
                    <a>To Index</a>
                </Link>
                <AwardPool />
            </div>
        )
    }
}

export default Target;