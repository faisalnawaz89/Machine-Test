import React from 'react'

const RecentJobCard = ({rjMainImg, rjCompanyIcon, rjTitle, rjCompanyTilte, rjTag1, rjTag2, rjLoaction, rjHours, rjSalary}) => {
  return (
                <div className="recent--job--inner">
                    <div className="recent--job--box">
                        <div className="recent--job--image">
                            <img src={rjMainImg} alt="" />
                            <div class="flex info-bar recent--job-tags">
                                <div class="flex keyword--tag">
                                    <span>{rjTag1}</span>
                                    <span>{rjTag2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="recent--info">
                            <h3>{rjTitle}</h3>
                            <div className="flex space--between recent--job--title">
                                <div className="flex space--start recent--job--company">
                                    <div className="recent--job--company--icon">
                                        <img src={rjCompanyIcon} alt="" />
                                    </div>
                                    <p>{rjCompanyTilte}</p>
                                </div>
                                <div className="flex recent--job--tags">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            style={{ fill: "#ddd", transform: "", msfilter: "" }}>
                                            <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            style={{ fill: "#ddd", transform: "", msfilter: "" }}>
                                            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="flex space--start info-bar recent--job--information">
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
                                    <p>{rjLoaction}</p>
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
                                    <p>{rjHours}</p>
                                </div>
                            </div>
                            <div className="flex space--between recent--job--apply--btn">
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
                                    <p>{rjSalary}</p>
                                </div>
                                <div class="cta--btn">
                                    <a class="orange--btn" href="#">Apply now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default RecentJobCard