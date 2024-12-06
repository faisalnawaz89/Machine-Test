import React from 'react'

const NavAccount = () => {
  return (
    <div className="user--account--bar">
        <div className="flex space--left user--account">
            <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "#fff", transform: "", msfilter: "" }}
            >
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" />
                <circle cx="10.5" cy="19.5" r="1.5" />
                <circle cx="17.5" cy="19.5" r="1.5" />
            </svg>
            </span>
            <h4>Cart</h4>
        </div>
        <div className="flex space--left user--account">
            <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "#fff", transform: "", msfilter: "" }}
            >
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
            </svg>
            </span>
            <h4>Login</h4>
        </div>
    </div>
  );
}

export default NavAccount