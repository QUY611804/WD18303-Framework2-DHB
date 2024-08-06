import { createIcon } from "@chakra-ui/icons";
export const HomeIcon = createIcon({
    displayName: "HomeIcon",
    viewBox: "0 0 24 24",
    
    path: (
      <g>
        <path
          fill="currentColor"
          d="M11.494 4.951a.351.351 0 00-.486 0l-8.09 7.729a.352.352 0 00-.109.254v7.254a1.406 1.406 0 001.405 1.406h4.223a.703.703 0 00.704-.703v-5.976a.351.351 0 01.351-.352h3.516a.351.351 0 01.351.352v5.976a.703.703 0 00.704.703h4.22a1.407 1.407 0 001.407-1.406v-7.254a.35.35 0 00-.108-.254L11.494 4.95z"
        />
        <path
          fill="currentColor"
          d="M21.574 11.23l-3.287-3.144V3.314a.703.703 0 00-.703-.703h-2.11a.703.703 0 00-.703.703V4.72l-2.545-2.434c-.239-.24-.593-.378-.976-.378-.38 0-.734.138-.972.379L.93 11.23a.717.717 0 00-.058.983.703.703 0 001.018.046l9.119-8.713a.352.352 0 01.486 0l9.12 8.713a.703.703 0 00.992-.019c.27-.28.248-.74-.033-1.01z"
        />
      </g>
    ),
  });

  export const ProfileIcon = createIcon({
    displayName: "ProfileIcon",
    viewBox: "0 0 24 24",
    path: (
      <g>
        <path d="M0 0h24v24H0V0z" fill="transparent" />
        <path
          fill="currentColor"
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
        />
      </g>
    ),
  });

  export const BagIcon = createIcon({
    displayName: "BagIcon",
    viewBox: "0 0 24 24",
    path: (
      <g>
        <path d="M0 0h24v24H0V0z" fill="transparent" />
        <path
          fill="currentColor"
          d="M19 6h-2.1c-.2-2.1-1.9-3.7-4-3.9-2.1-.3-4.1 1.3-4.4 3.4V6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 6c.2-1.1 1.2-2 2.3-2 1.1 0 2 .8 2.2 1.9V6H9V6zM5 8h14v12H5V8zm2 3h10v2H7v-2z"
        />
      </g>
    ),
  });


  const CategoryIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-list"
      {...props}
    >
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  );
  
  export default CategoryIcon;
  




  export const InvoiceIcon = createIcon({
    displayName: "InvoiceIcon",
    viewBox: "0 0 24 24",
    path: (
      <g>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          fill="currentColor"
          d="M20 2H8c-1.1 0-2 .9-2 2v16c0 .55.45 1 1 1 .25 0 .5-.1.71-.29l2.3-2.3 2.3 2.3c.39.39 1.02.39 1.41 0l2.3-2.3 2.3 2.3c.39.39 1.02.39 1.41 0 .21-.2.29-.45.29-.71V4c0-1.1-.9-2-2-2zm-2 14H10v-2h8v2zm0-4H10V6h8v6z"
        />
      </g>
    ),
  });
  
