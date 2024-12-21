import React from 'react'
import google_img from '../../Assets/google.png'

const JobInformation = ({companyImg, jobTitle, jobLocation, jobHours, jobSalary, jobType, jobMode}) => {
  return (
                <div className="grid featured--job--bar">
                    <div className="company--logo">
                        <img src={companyImg} alt="" />
                    </div>
                    <div className="job--information">
                        <h3>{jobTitle}</h3>
                        <div className="flex info-bars">
                            <div className="flex info-bar">
                                <div className="info--bar">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                    >
                                    <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z" />
                                    <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" />
                                    </svg>
                                </div>
                                <p>{jobLocation}</p>
                            </div>
                            <div className="flex info-bar">
                                <div className="info--bar">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                    >
                                    <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                                    <path d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707-2-2 1.414-1.414 2 2z" />
                                </svg>
                                </div>
                                <p>{jobHours}</p>
                            </div>
                            <div className="flex info-bar">
                                <div className="info--bar">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                    >
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                    <path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z" />
                                    </svg>
                                </div>
                                <p>${jobSalary}</p>
                            </div>
                            <div className="flex info-bar">
                                <div class="flex keyword--tag">
                                    <span>{jobType}</span>
                                    <span>{jobMode}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta--btn">
                        <a className="orange--btn" href="#">Apply now</a>
                    </div>
                </div>
  )
}

export default JobInformation