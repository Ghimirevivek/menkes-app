import { COLORS } from "@/theme";
import { Status } from "./enums";

interface Unit {
  id: string;
  price: string;
  suite: string;
  status: "Pending" | "Allocation" | "Conditional";
  details1: string;
  details2: string;
  details3: string;
  details4: string;
  details5: string;
  codes?: string;
}

// Define the Map for styles
export const statusStyles = new Map<
  Status,
  { backgroundColor: string; textColor: string }
>([
  [
    Status.Draft,
    { backgroundColor: COLORS.draftBackground, textColor: COLORS.gray },
  ],
  [
    Status.Incomplete,
    { backgroundColor: COLORS.errorBackground, textColor: COLORS.error },
  ],
  [
    Status.Pending,
    { backgroundColor: COLORS.pending, textColor: COLORS.pendingText },
  ],
  [
    Status.Allocation,
    { backgroundColor: COLORS.allocted, textColor: COLORS.primary },
  ],
  [
    Status.Conditional,
    { backgroundColor: COLORS.conditional, textColor: COLORS.conditionalText },
  ],
]);

export const AllocationUnits: Unit[] = [
  {
    id: "2",
    price: "$550,000",
    suite: "Suite 23",
    status: "Allocation",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details4: "Unit Type",
    details5: "Exposure",
    // codes: "WS# ADA12221",
  },

  {
    id: "4",
    price: "$550,000",
    suite: "Suite 23",
    status: "Allocation",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details4: "Unit Type",
    details5: "Exposure",
    // codes: "WS# ADA12221",
  },
  {
    id: "5",
    price: "$550,000",
    suite: "Suite 23",
    status: "Allocation",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details4: "Unit Type",
    details5: "Exposure",
    // codes: "WS# ADA12221",
  },
  {
    id: "6",
    price: "$550,000",
    suite: "Suite 23",
    status: "Allocation",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details4: "Unit Type",
    details5: "Exposure",
    // codes: "WS# ADA12221",
  },
];

export const units: Unit[] = [
  {
    id: "1",
    price: "$550,000",
    suite: "Suite 23",
    status: "Pending",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details4: "Unit Type",
    details5: "Exposure",
    codes: "WS# ADA12221",
  },
  {
    id: "2",
    price: "$550,000",
    suite: "Suite 23",
    status: "Allocation",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details5: "Exposure",
    details4: "Unit Type",
    codes: "WS# ADA12221",
  },
  {
    id: "3",
    price: "$550,000",
    suite: "Suite 23",
    status: "Conditional",
    details1: "2 Bed",
    details2: "2 Bath",
    details3: "1,500 sqft",
    details4: "Unit Type",
    details5: "Exposure",
    codes: "WS# ADA12221",
  },
];

interface FirmUnit {
  id: string;
  names: string;
  price: string;
  suite: string;
  code: string;
  details: string;
  status: string;
  conditions: { status: boolean; label: string }[];
}

export const FirmUnitData: FirmUnit[] = [
  {
    id: "1",
    names: "James Bond",
    price: "$550,000",
    status: "Conditional",
    suite: "Suite 23",
    code: "WS# ADA12231",
    details: "2 Bed • 2 Bath • 1,500 sqft",
    conditions: [
      { status: false, label: "Post Dated Cheques" },
      { status: true, label: "Mortgage Pre-Approval Letter" },
    ],
  },
  {
    id: "2",
    names: "David Smith, Robert Smith",
    price: "$550,000",
    status: "Conditional",
    suite: "Suite 23",
    code: "WS# ADA12231",
    details: "2 Bed . 2 Bath • 1,500 sqft",
    conditions: [
      { status: true, label: "Post Dated Cheques" },
      { status: true, label: "Mortgage Pre-Approval Letter" },
    ],
  },
];

// Define TypeScript types
type KeyValuePair = {
  key: string;
  value: string;
};

type Section = {
  section: string;
  data: KeyValuePair[];
};

// Array of key-value pairs
const keyValuePairs: Section[] = [
  {
    section: "Building Details",
    data: [
      { key: "Project", value: "Bravo" },
      { key: "Tower", value: "East" },
      { key: "Unit Number", value: "23" },
      { key: "Parking (2 Bed or larger)", value: "None" },
      { key: "Locker", value: "Washt" },
    ],
  },
  {
    section: "Preferred Suite Types",
    data: [
      { key: "Suite Type 1", value: "P10 300 (Lower Tower), Mid Floor Level" },
      { key: "Suite Type 2", value: "R20 400 (Tower), Lower Floor Level" },
      {
        key: "Suite Type 3",
        value: "New Orleans 4B (Pent), Higher Floor Level",
      },
    ],
  },
  {
    section: "Purchaser Personal Details",
    data: [
      { key: "First Name", value: "James" },
      { key: "Middle Name", value: "" }, // Empty value for Middle Name
      { key: "Last Name", value: "Bond" },
      { key: "Date of Birth", value: "November 11, 1990" },
      { key: "Email Address", value: "james.bond@gmail.com" },
      { key: "Phone Number", value: "416-123-5553" },
    ],
  },
  {
    section: "Purchaser Occupation Details",
    data: [
      { key: "SIN", value: "559 114 303" },
      { key: "Occupation", value: "Designer" },
      { key: "Name of Company", value: "247 Labs" },
    ],
  },
  {
    section: "Purchaser Address",
    data: [
      { key: "Address", value: "10th Avenue, PO Box 4001, Victoria BC" },
      { key: "Apt, Suite Number", value: "3425" },
    ],
  },
];

export default keyValuePairs;

export const slides = [
  {
    headline: "Headline 1",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    headline: "Headline 2",
    description:
      "This is the second slide content. It has a different headline and description.",
  },
  {
    headline: "Headline 3",
    description:
      "This is the third slide. You can add as many slides as you want.",
  },
];

export const buildingDetails = [
  { label: "Project", value: "Bravo" },
  { label: "Tower", value: "East" },
  { label: "Unit Number", value: "23" },
  { label: "Parking (2 Bed or larger)", value: "None" },
  { label: "Locker", value: "Waitlist" },
];

export const suiteTypes = [
  { label: "Suite Type 1", value: "RIO 390 (Lower Tower) Mid Floor Level" },
  { label: "Suite Type 2", value: "RIO 390 (Lower Tower) Mid Floor Level" },
  { label: "Suite Type 3", value: "RIO 390 (Lower Tower) Mid Floor Level" },
];

export const personalDetails = [
  { label: "First Name", value: "James" },
  { label: "Middle Name", value: "-" },
  { label: "Last Name", value: "Bond" },
  { label: "Date of Birth", value: "November 11, 1990" },
  { label: "Email Address", value: "john.doe@gmail.com" },
  { label: "Phone Number", value: "416-123-3533" },
];

export const occupationDetails = [
  { label: "SIN", value: "599 114 303" },
  { label: "Occupation", value: "Designer" },
  { label: "Name of Company", value: "247 Labs" },
];

export const addressDetails = [
  { label: "Address", value: "10th Avenue, PO Box 4001, Victoria BC" },
  { label: "Apt, Suite Number", value: "1425" },
];

interface WorkListItem {
  id: string;
  name: string;
  details1: string;
  details2: string;
  status: string;
  code: string | null;
}

export const workSheet: WorkListItem[] = [
  {
    id: "1",
    name: "David Smith, Robert Smith",
    status: "Draft",
    code: null,
    details1: "East Tower (Unit 23)",
    details2: "Started 11-Nov-2023",
  },
  {
    id: "2",
    name: "David Smith, Robert Smith",
    status: "Pending",
    code: "WS# ADA12231",
    details1: "East Tower (Unit 23)",
    details2: "Started 11-Nov-2023",
  },
  {
    id: "3",
    name: "David Smith, Robert Smith",
    status: "Incomplete",
    code: "WS# ADA12231",
    details1: "East Tower (Unit 23)",
    details2: "Started 11-Nov-2023",
  },
];

export const workSheetFilter = [
  "Allocated",
  "Draft",
  "Pending",
  "Approved",
  "Out for Signing",
  "Conditional",
  "Cancelling",
  "Firm",
  "Incomplete",
];


interface Homeunits {
  id: string;
  name: string;
  type:string;
  location:string;
}

export const Homeunits: Homeunits[] = [
  { id: "1", name: "BRAVO", type: "Residential", location: "Toronto, ON" },
  {
    id: "2",
    name: "SUGAR WHARF",
    type: "Residential",
    location: "Toronto, ON",
  },
];
export const Firmunits: Homeunits[] = [
  { id: "1", name: "BRAVO", type: "Residential", location: "Toronto, ON" },
];
export const WorkSheetunits: Homeunits[] = [
  { id: "1", name: "BRAVO", type: "Residential", location: "Toronto, ON" },
];





export const SubmitWorkSheet = [
  { id: "1", name: "Bravo at Festival", type: "Residential", location: "Toronto, ON" },
  { id: "2", name: "Adagio", type: "Residential", location: "Toronto, ON" },
  { id: "3", name: "Elektra", type: "Residential", location: "Toronto, ON" },
  { id: "4", name: "Sugar Wharf", type: "Residential", location: "Toronto, ON" },
  { id: "5", name: "The Whitfield", type: "Residential", location: "Toronto, ON" },
];


export const images = [
  { id: 1, image: require("../assets/images/Video1.png"), duration: "2:11" },
  { id: 2, image: require("../assets/images/Frame2.png"), duration: "" },
  { id: 3, image: require("../assets/images/Frame3.png"), duration: "" },
  { id: 4, image: require("../assets/images/Frame4.png"), duration: "" },
  { id: 5, image: require("../assets/images/Video5.png"), duration: "3:15" },
  { id: 5, image: require("../assets/images/Frame6.png"), duration: "3:15" },
];


export const TABS = [
  { key: "info", title: "Info" },
  { key: "docum", title: "Documents" },
  { key: "alloc", title: "Allocated Units" },
  { key: "hotl", title: "Hotlist" },
]



export const SearchTabs = [
  { key: "projects", title: "Projects" },
  { key: "purchasers", title: "Purchasers" },
  { key: "worksheets", title: "Worksheets" },
  { key: "suites", title: "Suites" },
]