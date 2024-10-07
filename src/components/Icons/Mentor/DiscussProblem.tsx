import { cn } from "@/utils/cn";
import React from "react";

const DiscussProblem = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-7", className)}
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M300.501 414.165c8.363 8.363 19.307 12.502 30.251 12.502 10.859 0 21.696-4.075 29.845-12.267l59.584-57.749c8.448-8.192 8.662-21.718.448-30.166-8.234-8.448-21.717-8.661-30.165-.448l-60.032 57.75-35.712-34.624c50.325-32.192 84.608-83.904 88.789-143.254 3.947-55.744-16.384-110.293-55.744-149.653C288.405 16.875 233.792-3.52 178.112.491 81.557 7.317 0 97.899 0 198.315v107.477C0 348.907 35.05 384 78.101 384h95.51c28.501 0 55.765-5.205 80.682-14.613l46.208 44.778Zm-222.4-72.832c-19.541 0-35.434-15.936-35.434-35.541V198.315c0-78.848 63.402-149.952 138.432-155.264 3.562-.256 7.104-.384 10.624-.384 39.658 0 77.76 15.616 105.856 43.754 30.634 30.614 46.421 73.067 43.37 116.48-5.397 76.331-80.469 138.432-167.36 138.432H78.101Zm176.896-203.392c4.779 27.115-8.128 54.23-32.128 67.478-9.536 5.248-9.536 6.784-9.536 7.914 0 11.798-9.536 21.334-21.333 21.334-11.797 0-21.333-9.536-21.333-21.334 0-27.904 22.144-40.085 31.594-45.29 6.166-3.414 12.694-11.414 10.71-22.72-1.472-8.384-8.576-15.488-16.918-16.939-6.613-1.237-12.864.448-17.749 4.608-4.864 4.053-7.637 10.027-7.637 16.363 0 11.797-9.536 21.333-21.334 21.333-11.797 0-21.333-9.536-21.333-21.333 0-18.966 8.341-36.843 22.869-49.046 14.528-12.202 33.664-17.365 52.566-13.93 25.813 4.501 47.04 25.706 51.562 51.562Zm-36.33 144.726c0 14.72-11.947 26.666-26.667 26.666-14.72 0-26.667-11.946-26.667-26.666S177.28 256 192 256c14.72 0 26.667 11.947 26.667 26.667ZM512 341.333V448c0 35.349-28.651 64-64 64H341.333c-63.04 0-118.08-34.453-147.626-85.419 16.405-.128 32.384-1.941 47.829-5.29 23.488 29.248 59.456 48.042 99.797 48.042H448c11.776 0 21.333-9.557 21.333-21.333V341.333c0-40.341-18.794-76.309-48.042-99.797a235.48 235.48 0 0 0 5.29-47.829C477.547 223.253 512 278.293 512 341.333Z"
          fill="#302A39"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DiscussProblem;
