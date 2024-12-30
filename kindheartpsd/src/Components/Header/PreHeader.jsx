import React from 'react'
import SocialMedia from './SocialMedia'

const PreHeader = () => {
  return (
    <div className="preheader pre--header">
            <div className="container">
                <div className="grid space--between pre--header--block">
                    <div className="flex space--center info--block">
                        <a className="flex space--center pre--header--icons">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                                    >
                                    <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z" />
                                    <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" />
                                </svg>
                            </span>
                            <span>Akershusstranda 20, 0150 Oslo, Norway</span>
                        </a>
                        <a className="flex space--center pre--header--icons">
                            <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}>
                                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                                </svg>
                            </span>
                            <span>info@company.com</span>
                        </a>
                    </div>
                    <div className='socialmedia social--media'>
                        <SocialMedia IconsColor='whiteIcons' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PreHeader