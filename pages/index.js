import React from 'react';
import Link from 'next/link'

class Index extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Link href="/target">
                    <a>To Target</a>
                </Link>
            </div>
        )
    }
}

export default Index;