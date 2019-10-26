import React from "react"

const User = ({ firstName, lastName, github, bio, index }) => (
  <div
    style={{
      width: "50%",
      maxWidth: `300px`,
      minWidth: "260px",
      margin: "auto",
      marginBottom: `1.45rem`,
      marginTop: 0,
    }}
  >
    <div
      style={{
        position: "relative",
        maxWidth: `300px`,
        minWidth: "260px",
        margin: "auto",
      }}
    >
      <Avatar github={github} index={index} />
      <p
        style={{
          display: "inline",
          position: "absolute",
          minWidth: 120,
          bottom: 0,
          left: "35%",
          fontSize: 20,
          fontWeight: "bold",
          padding: "5px  10px",
          background: `linear-gradient(123.32deg, #A31EC8 2.81%, #FF00AA 96.06%)`,
          border: `2.63922px solid #FF04A8`,
          boxSizing: "border-box",
          boxShadow: `0px 131.961px 263.922px rgba(0, 0, 0, 0.2)`,
          borderRadius: `7.18104px`,
          transform: `rotate(-4deg)`,
          color: "#FFF",
        }}
      >
        {firstName} <br /> {lastName}
      </p>
    </div>
    <p
      style={{
        fontSize: 14,
        textAlign: "center",
        color: "#FFF",
        padding: "0px 20px",
      }}
    >
      {bio}
    </p>
  </div>
)

const Avatar = ({ github, index }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 475 472"
    >
      <g filter="url(#filter0_f)">
        <path
          fill="#C4C4C4"
          d="M137.362 103.167l84.143-12.14 84.287-10.817 50.513 65.901 49.425 66.721-33.631 78.041-34.862 77.537-84.143 12.14-84.288 10.816-50.512-65.901-49.425-66.72 33.63-78.041 34.863-77.537z"
        ></path>
        <path
          stroke="url(#paint0_linear)"
          strokeWidth="7.918"
          d="M136.796 99.249l-2.153.31-.892 1.984-34.862 77.538-.013.028-.012.028-33.63 78.041-.902 2.092 1.356 1.831 49.425 66.721.019.026.02.026 50.512 65.901 1.386 1.808 2.26-.29 84.288-10.817.03-.004.031-.004 84.143-12.14 2.153-.31.892-1.985 34.863-77.537.012-.028.013-.029 33.63-78.04.902-2.093-1.356-1.831-49.425-66.72-.02-.026-.019-.026-50.513-65.901-1.386-1.808-2.26.29L221.001 87.1l-.031.005-.031.004-84.143 12.14z"
        ></path>
      </g>
      <mask
        id="a"
        width="338"
        height="312"
        x="68"
        y="80"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#C4C4C4"
          d="M137.362 103.165l84.143-12.14 84.287-10.816 50.513 65.901 49.425 66.72-33.631 78.041-34.862 77.537-84.143 12.14-84.288 10.817-50.512-65.901-49.425-66.721 33.63-78.04 34.863-77.538z"
        ></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill={`url(#pattern${index})`}
          d="M63.875 73.453H404.22V418.46299999999997H63.875z"
        ></path>
        <path
          style={{ mixBlendMode: "color" }}
          fill="#A60E93"
          fillOpacity="0.2"
          d="M63.875 73.453H404.22V418.46299999999997H63.875z"
        ></path>
      </g>
      <g opacity="0.55">
        <path
          stroke="#F0A"
          strokeWidth="5.278"
          d="M301.696 324.044l59.735-8.721m13.785-2.18l25.273-4.36m16.082-4.361l25.273-4.36m-89.603 26.163l25.273-4.361m4.595-21.802l25.272-4.361m-71.222 2.18l25.272-4.36m25.273-13.081l25.272-4.36"
        ></path>
        <path
          stroke="#E83EA9"
          strokeWidth="5.278"
          d="M85.59 339.575l54.392-8.693m9.065-2.173l24.93-4.347m-99.72 28.254l24.93-4.346m31.729-6.521l24.93-4.347m-92.92-4.346l24.93-4.347m20.397-6.521l24.93-4.347"
        ></path>
        <path
          stroke="#F0A"
          strokeWidth="5.278"
          d="M49.95 179.748l22.06-3.958m15.572-2.64l14.274-2.639m2.595 10.557l7.786-21.114m0 19.794l7.786-21.113m3.893 7.917l14.275-2.639m3.893-9.237l6.488 7.917-3.893 10.557"
        ></path>
        <path
          stroke="#5C84F7"
          strokeWidth="5.278"
          d="M325.054 261.564l22.06-3.959m15.572-2.639l14.275-2.639m2.595 10.557l7.786-21.114m0 19.794l7.786-21.113m3.893 7.917l14.274-2.639m3.893-9.237l6.488 7.917-3.893 10.557"
        ></path>
        <path
          fill="#EB42AB"
          d="M342.263 358.149l5.393-.126 5.392-.041 2.663 4.602 2.587 4.645-2.73 4.729-2.805 4.686-5.393.127-5.392.041-2.663-4.602-2.587-4.646 2.73-4.728 2.805-4.687zM360.43 117.98l5.393-.126 5.393-.041 2.662 4.602 2.588 4.646-2.731 4.728-2.804 4.686-5.394.127-5.392.041-2.663-4.602-2.587-4.646 2.731-4.728 2.804-4.687zM98.302 355.51l5.394-.126 5.392-.041 2.662 4.602 2.588 4.645-2.731 4.729-2.804 4.686-5.394.127-5.392.04-2.662-4.601-2.588-4.646 2.73-4.728 2.805-4.687zM48.991 297.447l5.393-.126 5.392-.041 2.663 4.602 2.588 4.645-2.731 4.729-2.804 4.686-5.394.127-5.392.04-2.663-4.601-2.587-4.646 2.73-4.728 2.805-4.687zM108.684 107.424l5.393-.127 5.392-.041 2.663 4.602 2.587 4.646-2.731 4.728-2.804 4.687-5.393.126-5.392.041-2.663-4.602-2.588-4.645 2.731-4.729 2.805-4.686z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f"
          width="365.782"
          height="338.794"
          x="54.408"
          y="66.391"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur"
            stdDeviation="0"
          ></feGaussianBlur>
        </filter>
        <pattern
          id={`pattern${index}`}
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <image
            transform="translate(-.01) scale(.00106)"
            width="960"
            height="955"
            xlinkHref={`https://github.com/${github}.png?size=${400 + index}`}
          ></image>
        </pattern>
        <linearGradient
          id="paint0_linear"
          x1="137.362"
          x2="337.237"
          y1="103.167"
          y2="368.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDA2E"></stop>
          <stop offset="1" stopColor="#F0A"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default User
