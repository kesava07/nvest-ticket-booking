import React from 'react';

const AutoGenWheel = (props) => {
    const { handleAutoGenNumber, loading } = props;
    return (
        <div className=" text-center">
            <p className="text-white mt-2">Click the wheel to generate random tickets</p>
            <div>
                <img
                    className={`my-5 ${loading && 'Auto_wheel'}`}
                    src={require('../Assets/roulette.png')}
                    alt='wheel'
                    onClick={handleAutoGenNumber} />
            </div>
            <span className="warning-badge mt-5">Ticket number range: 100000 - 999999</span>
        </div>
    )
}

export default AutoGenWheel;