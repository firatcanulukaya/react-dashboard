import React from 'react'

export default function Loan(props) {
    const { loan } = props;
    return (
        <div className="loan">
            <div className="row">
                <div className="loan-container">
                    <div className="loan-center">
                        <p>{loan && loan.title}</p>
                        <a href={loan && loan.cta.link}>{loan && loan.cta.title}</a>
                    </div>
                </div>

            </div>
        </div>
    )
}