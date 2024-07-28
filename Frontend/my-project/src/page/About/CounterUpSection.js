import React from 'react';
import CountUp from 'react-countup';

const CounterUpSection = () => {
    return (
        <div className="counterup_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup">
                            <div className="counter_img">
                                <img src="/img/about/count.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <CountUp end={2170} duration={2.75} className="counter_number_large" />
                                <p>happy customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup count-two">
                            <div className="counter_img">
                                <img src="/img/about/count2.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <CountUp end={8080} duration={2.75} className="counter_number_large" />
                                <p>AWARDS won</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup">
                            <div className="counter_img">
                                <img src="/img/about/count3.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <CountUp end={2150} duration={2.75} className="counter_number_large" />
                                <p>HOURS WORKED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single_counterup count-two">
                            <div className="counter_img">
                                <img src="/img/about/count4.png" alt="" />
                            </div>
                            <div className="counter_info">
                                <CountUp end={2170} duration={2.75} className="counter_number_large" />
                                <p>COMPLETE PROJECTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterUpSection;
