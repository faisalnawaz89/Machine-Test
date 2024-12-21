import React from 'react'
import './BrowseCategory.css'
import job_image_1 from '../../Assets/browse-img-1.jpg'
import job_image_2 from '../../Assets/browse-img-2.jpg'

const BrowseCategory = () => {
  return (
    <div className='browsecategory browse--category'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Browse by Categories</h2>
            </div>
            <div className="browse--category--icons">
                <div className="flex browse--category--icon">
                    <div className="browse--category--icon--box">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                >
                                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H4V5h16zM4 19v-8h16.001l.001 8H4z" />
                                <path d="M14 6h2v2h-2zm3 0h2v2h-2z" />
                            </svg>
                        </span>
                        <h5>Web design</h5>
                        <span className='category--number'>320</span>
                    </div>
                    <div className="browse--category--icon--box">
                        <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                            >
                            <path d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z" />
                            <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" />
                        </svg>
                        </span>
                        <h5>Marketing</h5>
                        <span className='category--number'>180</span>
                    </div>
                    <div className="browse--category--icon--box">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                <path d="m9 17 8-5-8-5z" />
                            </svg>
                        </span>
                        <h5>Video</h5>
                        <span className='category--number'>140</span>
                    </div>
                    <div className="browse--category--icon--box">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" />
                            </svg>
                        </span>
                        <h5>Websites</h5>
                        <span className='category--number'>140</span>
                    </div>
                    <div className="browse--category--icon--box">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={36}
                                height={36}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}
                                >
                                <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" />
                            </svg>
                        </span>
                        <h5>Customer Support</h5>
                        <span className='category--number'>64</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='featuredjob feature--job'>
            <div className="container">
                <div className="grid space--between job--showcase">
                    <div className="featured--job--left">
                        <div className="featured--job--image--inner left--border">
                            <img src={job_image_1} alt="" />
                            <div className='featured--job--name--title'>
                                <div className="name--title--box">
                                    <div className="name--title--box--header"></div>
                                    <h4>Julia Ward</h4>
                                    <h5>Investor</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featured--job--middle">
                        <div className="featured--job--middle--content">
                            <h2>Introduction Gotto</h2>
                            <p>Gotto Job is a free website template for job portals. This layout is based on Bootstrap 5 CSS framework. Thank you for visiting <a href="#">Tooplate website</a>. Images are from <a href="#">FreePik</a> website.</p>
                            <div className="flex middle--box--btn">
                                <div className="cta--btn">
                                    <a className="border--btn" href="#">Get to know us</a>
                                    <a className="liner--btn" href="#">Explore Jobs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featured--job--right">
                        <div className="featured--job--image--inner right--border">
                            <img src={job_image_2} alt="" />
                            <div className='featured--job--icon'>
                                <div className="flex featured--job--icon-inner">
                                    <div className="cta--btn">
                                        <a className="orange--btn" href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                style={{ fill: "#fff", transform: "", msfilter: "" }}>
                                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                                                <circle cx="16.806" cy="7.207" r="1.078" />
                                                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                                            </svg>
                                            <div>@Gotto</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrowseCategory