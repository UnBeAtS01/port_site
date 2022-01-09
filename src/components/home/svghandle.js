import React, { useEffect, useState } from "react";
import myImg1 from "../../Assets/updat3.png";
import myImg2 from "../../Assets/updat4.png";
import myImg3 from "../../Assets/update1.png";

import "./img-svg.css";

function Svghandle(props) {
  const [count, setcount] = useState(1);

  useEffect(() => {
    const runningcount = () => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          setcount(count + 1);
        }, 3000);
      }
    };
    runningcount();
  }, [count]);
  return (
    <div className="cont-svg">
      <svg
        className="svg-deal"
        width="500"
        height="500"
        viewBox="0 0 331 319"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="back-anim" clip-path="url(#clip0_1_137)">
          <path
            id="fiftth"
            d="M131.588 219.594C203.882 256.232 275.329 266.411 291.169 242.328C307.008 218.246 261.243 169.023 188.949 132.385C116.655 95.7464 45.2082 85.5679 29.3686 109.65C13.5289 133.732 59.2943 182.956 131.588 219.594Z"
            fill="url(#paint0_linear_1_137)"
            fill-opacity="0.4"
          />
          <path
            id="fourth"
            d="M272.529 258.396C304.414 230.407 285.11 168.083 229.411 119.191C173.712 70.2988 102.71 53.3535 70.8249 81.3424C38.9392 109.331 58.2437 171.656 113.943 220.548C169.642 269.44 240.643 286.385 272.529 258.396Z"
            fill="#9470DC"
            fill-opacity="0.2"
          />
          <path
            id="third"
            d="M259.992 144.122C244.083 64.9264 186.529 7.63791 131.44 16.1644C76.3521 24.6909 44.5904 95.8035 60.4989 174.999C76.4074 254.194 133.962 311.483 189.05 302.956C244.139 294.43 275.9 223.317 259.992 144.122Z"
            fill="url(#paint1_linear_1_137)"
            fill-opacity="0.35"
          />
          <path
            id="second"
            d="M118.904 285.659C169.859 301.939 234.59 258.648 263.483 188.966C292.376 119.284 274.491 49.5978 223.535 33.318C172.58 17.0382 107.849 60.3293 78.9561 130.011C50.0629 199.693 67.948 269.379 118.904 285.659Z"
            fill="url(#paint2_linear_1_137)"
            fill-opacity="0.7"
          />
          <path
            id="first"
            d="M171.059 76.9319C246.404 76.9319 307.645 138.95 307.645 180.149C307.645 221.348 246.565 254.746 171.22 254.746C95.8744 254.746 34.7949 221.348 34.7949 180.149C34.7949 138.95 95.7134 76.9319 171.059 76.9319Z"
            fill="#9470DC"
            fill-opacity="0.4"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_137"
            x1="52"
            y1="105.5"
            x2="257.191"
            y2="208.771"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C2A4FF" />
            <stop offset="1" stop-color="#3D174A" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_137"
            x1="188"
            y1="297.5"
            x2="49.1002"
            y2="-158.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9470DC" />
            <stop offset="0.977405" stop-color="#8800C8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_137"
            x1="274"
            y1="-22.5"
            x2="129.822"
            y2="287.014"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.048243"
              stop-color="#CA5ECC"
              stop-opacity="0.113325"
            />
            <stop offset="0.117827" stop-color="#120113" stop-opacity="0" />
            <stop
              offset="0.156061"
              stop-color="#78428B"
              stop-opacity="0.374948"
            />
            <stop
              offset="0.240739"
              stop-color="#AB3AD2"
              stop-opacity="0.783144"
            />
            <stop
              offset="0.504361"
              stop-color="#5642D3"
              stop-opacity="0.675277"
            />
            <stop
              offset="0.684965"
              stop-color="#503489"
              stop-opacity="0.215226"
            />
            <stop offset="0.85777" stop-color="#8B09DA" stop-opacity="0.27" />
            <stop
              offset="0.992379"
              stop-color="#B757E1"
              stop-opacity="0.164867"
            />
          </linearGradient>
          <clipPath id="clip0_1_137">
            <rect
              width="329.574"
              height="317.669"
              fill="white"
              transform="translate(0.688477 0.72583)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="626"
        height="739"
        viewBox="0 0 626 739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-deal2"
      >
        <g id="undraw_letter_re_8m03 1">
          <g id="group4">
            <path
              id="Vector"
              d="M193.294 62.7296C191.231 61.6642 189.703 59.8912 189.043 57.7938C184.868 59.2918 180.362 59.8348 175.91 59.3765C171.459 58.9183 167.193 57.4725 163.477 55.1622C150.764 47.2599 147.379 31.2746 155.932 19.528C164.484 7.78148 181.785 4.65434 194.497 12.5564C207.178 20.439 210.577 36.3646 202.106 48.1027C203.158 48.6409 204.084 49.3662 204.831 50.2369C205.578 51.1076 206.13 52.1064 206.457 53.1756C206.778 54.234 206.87 55.3405 206.728 56.4318C206.587 57.5232 206.213 58.578 205.63 59.5361C205.047 60.4942 204.266 61.3368 203.33 62.0159C202.395 62.6949 201.324 63.197 200.178 63.4935C199.033 63.7928 197.835 63.8794 196.654 63.7483C195.472 63.6171 194.33 63.2709 193.294 62.7296V62.7296Z"
              fill="white"
            />
            <path
              id="Vector_2"
              d="M194.305 60.6014C192.862 59.7666 191.816 58.4571 191.377 56.9372C191.292 56.6559 191.144 56.3943 190.942 56.1692C190.741 55.9441 190.49 55.7606 190.207 55.6305C189.924 55.5004 189.615 55.4266 189.299 55.4139C188.983 55.4011 188.668 55.4497 188.374 55.5566L188.236 55.6066C182.607 57.6503 176.372 57.7626 170.662 55.9231C164.952 54.0837 160.144 50.4142 157.11 45.5803C154.076 40.7463 153.018 35.0679 154.127 29.5748C155.236 24.0818 158.439 19.1377 163.154 15.6393C167.87 12.1409 173.786 10.3197 179.83 10.5061C185.874 10.6925 191.646 12.874 196.099 16.6552C200.551 20.4363 203.39 25.5666 204.1 31.1158C204.81 36.665 203.345 42.2655 199.969 46.9019L199.887 47.0148C199.71 47.2572 199.591 47.5312 199.536 47.819C199.481 48.1068 199.492 48.402 199.569 48.6856C199.645 48.9692 199.785 49.2348 199.979 49.4654C200.174 49.6959 200.418 49.8862 200.697 50.0239C201.502 50.4132 202.214 50.9483 202.79 51.5972C203.367 52.2461 203.796 52.9956 204.052 53.8009C204.318 54.6803 204.366 55.604 204.192 56.5029C204.018 57.4018 203.627 58.2528 203.047 58.9923C202.302 59.9513 201.266 60.6844 200.07 61.0988C199.321 61.3609 198.528 61.4955 197.727 61.4964C196.519 61.4956 195.335 61.1858 194.305 60.6014V60.6014Z"
              fill="#F0F0F0"
            />
            <path
              id="Vector_3"
              d="M193.192 62.8972C192.876 62.7331 192.571 62.5523 192.277 62.3558C189.122 60.2407 185.399 59.2611 181.796 59.5966C175.299 60.197 168.78 58.6853 163.36 55.3218C150.552 47.3603 147.142 31.2551 155.758 19.4206C164.375 7.58626 181.805 4.43526 194.613 12.3968C199.918 15.7038 203.84 20.5879 205.727 26.2382C207.614 31.8886 207.352 37.9652 204.986 43.4593C204.455 44.6675 204.236 45.9735 204.347 47.2735C204.457 48.5735 204.895 49.8317 205.624 50.9482C206.373 52.0717 206.831 53.34 206.961 54.654C207.092 55.968 206.892 57.2921 206.377 58.5229C205.862 59.7536 205.046 60.8577 203.993 61.7488C202.94 62.64 201.678 63.294 200.305 63.6599C199.465 63.8848 198.595 63.9993 197.72 64V64C196.134 63.9968 194.574 63.6171 193.192 62.8972V62.8972ZM156.277 19.7429C153.019 24.2174 151.394 29.5371 151.64 34.9252C151.886 40.3133 153.99 45.4877 157.644 49.6929C161.298 53.898 166.312 56.9138 171.952 58.2998C177.593 59.6859 183.565 59.3696 188.997 57.3972L189.319 57.2802L189.412 57.588C190.03 59.6273 191.5 61.3562 193.498 62.3942C195.496 63.4322 197.858 63.6944 200.066 63.123C202.273 62.5516 204.144 61.1936 205.267 59.3475C206.391 57.5015 206.674 55.3187 206.056 53.2794C205.739 52.2429 205.2 51.276 204.47 50.4362C203.74 49.5965 202.835 48.901 201.808 48.3913L201.504 48.2408L201.696 47.9757C205.746 42.4105 207.237 35.5872 205.842 29.0062C204.448 22.4253 200.281 16.6256 194.259 12.8824C188.238 9.13932 180.854 7.75928 173.731 9.04579C166.608 10.3323 160.33 14.18 156.277 19.7429H156.277Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_4"
              d="M190.404 36.8746C192.195 36.8746 193.647 35.5331 193.647 33.8781C193.647 32.2232 192.195 30.8816 190.404 30.8816C188.613 30.8816 187.161 32.2232 187.161 33.8781C187.161 35.5331 188.613 36.8746 190.404 36.8746Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_5"
              d="M179.34 36.8747C181.131 36.8747 182.583 35.5331 182.583 33.8781C182.583 32.2232 181.131 30.8816 179.34 30.8816C177.549 30.8816 176.097 32.2232 176.097 33.8781C176.097 35.5331 177.549 36.8747 179.34 36.8747Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_6"
              d="M168.275 36.8747C170.066 36.8747 171.518 35.5331 171.518 33.8781C171.518 32.2232 170.066 30.8816 168.275 30.8816C166.484 30.8816 165.032 32.2232 165.032 33.8781C165.032 35.5331 166.484 36.8747 168.275 36.8747Z"
              fill="#6C63FF"
            />
          </g>
          <g id="group3">
            <path
              id="Vector_7"
              d="M182.931 280.094C179.909 278.496 177.673 275.837 176.706 272.691C170.592 274.938 163.994 275.752 157.476 275.065C150.957 274.378 144.711 272.209 139.269 268.743C120.654 256.89 115.698 232.912 128.221 215.292C140.744 197.672 166.077 192.982 184.692 204.835C203.261 216.658 208.238 240.547 195.834 258.154C197.374 258.961 198.73 260.049 199.824 261.355C200.917 262.661 201.727 264.16 202.205 265.763C202.675 267.351 202.81 269.011 202.602 270.648C202.395 272.285 201.848 273.867 200.994 275.304C200.141 276.741 198.996 278.005 197.626 279.024C196.256 280.042 194.688 280.795 193.011 281.24C191.334 281.689 189.58 281.819 187.85 281.622C186.12 281.426 184.448 280.906 182.931 280.094V280.094Z"
              fill="white"
            />
            <path
              id="Vector_8"
              d="M184.411 276.902C182.298 275.65 180.766 273.686 180.123 271.406C179.999 270.984 179.782 270.591 179.486 270.254C179.191 269.916 178.825 269.641 178.41 269.446C177.996 269.251 177.543 269.14 177.08 269.121C176.618 269.102 176.156 269.175 175.725 269.335L175.523 269.41C167.282 272.475 158.152 272.644 149.79 269.885C141.429 267.125 134.388 261.621 129.946 254.37C125.505 247.119 123.955 238.602 125.579 230.362C127.202 222.123 131.892 214.707 138.797 209.459C145.702 204.211 154.365 201.48 163.215 201.759C172.066 202.039 180.517 205.311 187.037 210.983C193.557 216.654 197.714 224.35 198.754 232.674C199.793 240.997 197.647 249.398 192.704 256.353L192.584 256.522C192.326 256.886 192.151 257.297 192.07 257.729C191.99 258.16 192.006 258.603 192.118 259.028C192.23 259.454 192.435 259.852 192.719 260.198C193.004 260.544 193.362 260.829 193.771 261.036C194.949 261.62 195.991 262.422 196.835 263.396C197.679 264.369 198.308 265.493 198.683 266.701C199.073 268.02 199.143 269.406 198.888 270.754C198.633 272.103 198.06 273.379 197.211 274.488C196.121 275.927 194.604 277.027 192.852 277.648C191.756 278.041 190.594 278.243 189.422 278.245C187.652 278.243 185.918 277.779 184.411 276.902V276.902Z"
              fill="#F0F0F0"
            />
            <path
              id="Vector_9"
              d="M182.781 280.346C182.318 280.1 181.871 279.828 181.441 279.534C176.821 276.361 171.37 274.892 166.093 275.395C156.581 276.295 147.035 274.028 139.099 268.983C120.344 257.041 115.351 232.883 127.968 215.131C140.585 197.379 166.107 192.653 184.862 204.595C192.631 209.556 198.373 216.882 201.136 225.357C203.899 233.833 203.516 242.948 200.051 251.189C199.273 253.001 198.952 254.96 199.115 256.91C199.277 258.86 199.917 260.748 200.985 262.422C202.082 264.108 202.752 266.01 202.943 267.981C203.134 269.952 202.842 271.938 202.087 273.784C201.333 275.63 200.139 277.287 198.596 278.623C197.054 279.96 195.206 280.941 193.197 281.49C191.967 281.827 190.693 281.999 189.412 282V282C187.088 281.995 184.805 281.426 182.781 280.346V280.346ZM128.727 215.614C123.956 222.326 121.577 230.306 121.938 238.388C122.298 246.47 125.378 254.232 130.729 260.539C136.08 266.847 143.421 271.371 151.68 273.45C159.939 275.529 168.684 275.054 176.639 272.096L177.11 271.92L177.246 272.382C178.152 275.441 180.304 278.034 183.229 279.591C186.155 281.148 189.614 281.542 192.846 280.685C196.078 279.827 198.818 277.79 200.463 275.021C202.108 272.252 202.523 268.978 201.618 265.919C201.154 264.364 200.364 262.914 199.296 261.654C198.227 260.395 196.901 259.352 195.398 258.587L194.952 258.361L195.234 257.964C201.163 249.616 203.347 239.381 201.305 229.509C199.262 219.638 193.162 210.938 184.344 205.324C175.527 199.709 164.714 197.639 154.284 199.569C143.854 201.498 134.661 207.27 128.727 215.614H128.727Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_10"
              d="M178.699 241.312C181.322 241.312 183.448 239.3 183.448 236.817C183.448 234.335 181.322 232.322 178.699 232.322C176.076 232.322 173.95 234.335 173.95 236.817C173.95 239.3 176.076 241.312 178.699 241.312Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_11"
              d="M162.497 241.312C165.12 241.312 167.246 239.3 167.246 236.817C167.246 234.335 165.12 232.322 162.497 232.322C159.875 232.322 157.749 234.335 157.749 236.817C157.749 239.3 159.875 241.312 162.497 241.312Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_12"
              d="M146.296 241.312C148.919 241.312 151.045 239.3 151.045 236.817C151.045 234.335 148.919 232.322 146.296 232.322C143.673 232.322 141.547 234.335 141.547 236.817C141.547 239.3 143.673 241.312 146.296 241.312Z"
              fill="#6C63FF"
            />
          </g>
          <g id="group2">
            <path
              id="Vector_13"
              d="M174.588 201.3C170.461 199.036 167.406 195.269 166.086 190.812C157.735 193.995 148.724 195.149 139.82 194.175C130.917 193.201 122.386 190.129 114.953 185.22C89.5274 168.427 82.758 134.458 99.8627 109.497C116.967 84.5357 151.569 77.8905 176.994 94.6824C202.356 111.433 209.154 145.275 192.212 170.218C194.315 171.362 196.168 172.903 197.661 174.754C199.155 176.604 200.26 178.726 200.914 180.998C201.556 183.247 201.74 185.599 201.456 187.918C201.173 190.237 200.426 192.478 199.26 194.514C198.094 196.55 196.531 198.341 194.66 199.784C192.789 201.227 190.647 202.294 188.356 202.924C186.066 203.56 183.67 203.744 181.307 203.465C178.943 203.186 176.66 202.451 174.588 201.3V201.3Z"
              fill="white"
            />
            <path
              id="Vector_14"
              d="M180.405 196.508C177.382 194.744 175.19 191.976 174.271 188.764C174.093 188.169 173.782 187.616 173.36 187.141C172.938 186.665 172.413 186.277 171.82 186.002C171.227 185.727 170.579 185.571 169.917 185.544C169.255 185.517 168.595 185.62 167.978 185.846L167.69 185.952C155.898 190.271 142.836 190.508 130.873 186.62C118.909 182.733 108.837 174.977 102.481 164.76C96.1259 154.543 93.9087 142.541 96.2318 130.931C98.555 119.321 105.264 108.871 115.144 101.477C125.023 94.0827 137.418 90.2336 150.08 90.6275C162.743 91.0214 174.835 95.6323 184.163 103.624C193.491 111.616 199.439 122.459 200.926 134.188C202.414 145.917 199.343 157.754 192.271 167.553L192.099 167.792C191.729 168.304 191.479 168.883 191.364 169.492C191.249 170.1 191.273 170.724 191.433 171.323C191.593 171.923 191.886 172.484 192.293 172.971C192.7 173.459 193.212 173.861 193.797 174.152C195.483 174.975 196.974 176.106 198.182 177.477C199.389 178.849 200.288 180.433 200.825 182.135C201.383 183.994 201.483 185.946 201.119 187.846C200.754 189.746 199.934 191.544 198.719 193.107C197.159 195.134 194.988 196.684 192.483 197.56C190.914 198.114 189.251 198.398 187.574 198.4C185.043 198.398 182.562 197.744 180.405 196.508V196.508Z"
              fill="#F0F0F0"
            />
            <path
              id="Vector_15"
              d="M174.384 201.657C173.752 201.308 173.141 200.924 172.554 200.506C166.244 196.012 158.799 193.93 151.591 194.643C138.599 195.919 125.56 192.706 114.72 185.559C89.1044 168.641 82.2841 134.417 99.5169 109.269C116.75 84.1208 151.61 77.4249 177.226 94.3432C187.837 101.37 195.68 111.749 199.454 123.756C203.227 135.763 202.704 148.676 197.972 160.351C196.909 162.918 196.472 165.694 196.693 168.456C196.915 171.219 197.79 173.892 199.248 176.265C200.746 178.652 201.661 181.348 201.922 184.14C202.184 186.932 201.784 189.746 200.754 192.361C199.724 194.976 198.092 197.323 195.985 199.216C193.879 201.11 191.355 202.5 188.611 203.277C186.931 203.755 185.19 203.998 183.44 204V204C180.267 203.993 177.149 203.186 174.384 201.657V201.657ZM100.553 109.954C94.0378 119.462 90.7887 130.766 91.2807 142.216C91.7727 153.666 95.98 164.661 103.288 173.597C110.597 182.533 120.623 188.942 131.904 191.887C143.185 194.832 155.13 194.16 165.994 189.969L166.638 189.721L166.824 190.374C168.061 194.708 171 198.382 174.996 200.588C178.992 202.793 183.717 203.351 188.131 202.136C192.545 200.922 196.287 198.036 198.534 194.113C200.781 190.191 201.349 185.552 200.112 181.219C199.478 179.016 198.4 176.962 196.94 175.177C195.481 173.392 193.67 171.915 191.617 170.832L191.007 170.512L191.393 169.948C199.491 158.122 202.474 143.623 199.684 129.638C196.895 115.654 188.562 103.329 176.519 95.3752C164.475 87.4211 149.707 84.4885 135.461 87.2223C121.216 89.9561 108.66 98.1326 100.554 109.954H100.553Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_16"
              d="M168.808 146.359C172.391 146.359 175.294 143.508 175.294 139.991C175.294 136.474 172.391 133.623 168.808 133.623C165.226 133.623 162.322 136.474 162.322 139.991C162.322 143.508 165.226 146.359 168.808 146.359Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_17"
              d="M146.679 146.359C150.262 146.359 153.166 143.508 153.166 139.991C153.166 136.474 150.262 133.623 146.679 133.623C143.097 133.623 140.193 136.474 140.193 139.991C140.193 143.508 143.097 146.359 146.679 146.359Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_18"
              d="M124.551 146.359C128.133 146.359 131.037 143.508 131.037 139.991C131.037 136.474 128.133 133.623 124.551 133.623C120.968 133.623 118.064 136.474 118.064 139.991C118.064 143.508 120.968 146.359 124.551 146.359Z"
              fill="#6C63FF"
            />
          </g>
          <g id="group1">
            <path
              id="Vector_19"
              d="M262.133 178.208C259.443 176.705 257.452 174.204 256.592 171.245C251.149 173.358 245.275 174.124 239.472 173.478C233.669 172.831 228.109 170.791 223.264 167.532C206.692 156.385 202.28 133.834 213.428 117.263C224.577 100.692 247.13 96.2802 263.701 107.428C280.232 118.548 284.663 141.014 273.62 157.573C274.991 158.333 276.199 159.356 277.172 160.584C278.146 161.813 278.866 163.222 279.292 164.73C279.711 166.223 279.831 167.784 279.646 169.323C279.461 170.863 278.974 172.351 278.214 173.703C277.454 175.054 276.435 176.243 275.216 177.201C273.996 178.159 272.6 178.867 271.107 179.285C269.614 179.708 268.053 179.83 266.512 179.645C264.972 179.46 263.484 178.971 262.133 178.208V178.208Z"
              fill="white"
            />
            <path
              id="Vector_20"
              d="M263.451 175.206C261.57 174.028 260.206 172.18 259.634 170.036C259.523 169.64 259.33 169.27 259.067 168.953C258.805 168.635 258.478 168.377 258.109 168.193C257.74 168.009 257.337 167.905 256.925 167.887C256.513 167.869 256.102 167.938 255.719 168.089L255.539 168.159C248.202 171.042 240.074 171.201 232.63 168.606C225.187 166.011 218.919 160.834 214.965 154.015C211.01 147.196 209.631 139.185 211.076 131.436C212.522 123.687 216.696 116.712 222.844 111.777C228.991 106.842 236.703 104.272 244.582 104.535C252.461 104.798 259.985 107.876 265.789 113.21C271.594 118.544 275.294 125.781 276.22 133.61C277.145 141.438 275.235 149.339 270.834 155.879L270.727 156.039C270.497 156.381 270.341 156.767 270.27 157.173C270.199 157.579 270.213 157.996 270.313 158.396C270.412 158.796 270.594 159.171 270.848 159.496C271.101 159.821 271.42 160.089 271.784 160.284C272.833 160.833 273.761 161.588 274.512 162.503C275.263 163.419 275.823 164.476 276.157 165.612C276.504 166.853 276.566 168.156 276.34 169.424C276.113 170.692 275.602 171.892 274.846 172.936C273.876 174.288 272.525 175.323 270.966 175.907C269.99 176.277 268.955 176.467 267.912 176.468C266.337 176.467 264.793 176.03 263.451 175.206V175.206Z"
              fill="#F0F0F0"
            />
            <path
              id="Vector_21"
              d="M262 178.444C261.588 178.213 261.19 177.958 260.808 177.68C256.695 174.697 251.842 173.315 247.144 173.788C238.676 174.635 230.177 172.502 223.112 167.758C206.416 156.526 201.971 133.806 213.203 117.111C224.435 100.416 247.156 95.9712 263.853 107.203C270.769 111.868 275.881 118.758 278.34 126.729C280.8 134.7 280.459 143.272 277.374 151.023C276.682 152.727 276.397 154.57 276.541 156.404C276.686 158.238 277.256 160.013 278.206 161.588C279.183 163.173 279.779 164.962 279.949 166.815C280.12 168.669 279.859 170.537 279.188 172.273C278.516 174.01 277.453 175.567 276.08 176.824C274.707 178.081 273.062 179.004 271.273 179.52C270.178 179.837 269.043 179.999 267.903 180V180C265.835 179.996 263.802 179.46 262 178.444V178.444ZM213.879 117.566C209.632 123.878 207.514 131.383 207.835 138.984C208.155 146.585 210.898 153.884 215.661 159.817C220.425 165.749 226.96 170.003 234.313 171.959C241.665 173.914 249.451 173.468 256.532 170.685L256.951 170.52L257.073 170.954C257.879 173.831 259.795 176.27 262.399 177.735C265.004 179.199 268.083 179.569 270.96 178.763C273.838 177.957 276.277 176.041 277.741 173.437C279.205 170.832 279.575 167.753 278.769 164.876C278.356 163.414 277.653 162.05 276.702 160.865C275.751 159.681 274.571 158.7 273.232 157.981L272.835 157.768L273.087 157.394C278.365 149.543 280.309 139.918 278.491 130.634C276.673 121.35 271.242 113.168 263.392 107.888C255.542 102.607 245.916 100.66 236.631 102.475C227.346 104.29 219.162 109.718 213.879 117.566H213.879Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_22"
              d="M258.366 141.734C260.701 141.734 262.593 139.841 262.593 137.507C262.593 135.172 260.701 133.279 258.366 133.279C256.031 133.279 254.138 135.172 254.138 137.507C254.138 139.841 256.031 141.734 258.366 141.734Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_23"
              d="M243.943 141.734C246.278 141.734 248.17 139.841 248.17 137.507C248.17 135.172 246.278 133.279 243.943 133.279C241.608 133.279 239.715 135.172 239.715 137.507C239.715 139.841 241.608 141.734 243.943 141.734Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_24"
              d="M229.52 141.734C231.854 141.734 233.747 139.841 233.747 137.507C233.747 135.172 231.854 133.279 229.52 133.279C227.185 133.279 225.292 135.172 225.292 137.507C225.292 139.841 227.185 141.734 229.52 141.734Z"
              fill="#6C63FF"
            />
          </g>
        </g>
      </svg>

      {count % 3 === 1 ? (
        <img src={myImg1} className="img-fluid img-deal" alt="avatar" />
      ) : count % 3 === 0 ? (
        <img src={myImg2} className="img-fluid img-deal" alt="avatar" />
      ) : (
        <img src={myImg3} className="img-fluid img-deal" alt="avatar" />
      )}
    </div>
  );
}

export default Svghandle;