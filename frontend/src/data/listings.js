export const PRICE_RANGES = [
    { value: 0, label: 'Under 1,000,000', min: 100000, max: 1000000 },
    { value: 1, label: "1,000,000 - 2,000,000", min: 1000000, max: 2000000 },
    { value: 2, label: "2,000,000 - 3,000,000", min: 2000000, max: 3000000 },
    { value: 3, label: "3,000,000 - 4,000,000", min: 3000000, max: 4000000 }
]

export const AREAS = {
    Lagos: ["Yaba", "Surulere", "Ikeja", "Lekki", "Ajah", "Maryland", "Gbagada", "Ikorodu"],
    Abuja: ["Wuse 2", "Garki", "Maitama", "Gwarinpa", "Jabi", "Jahi", "Idu", "Kubwa", "Lugbe", "Asokoro"],
};



export const LISTINGS = [
  { id: 1, images: ['/images/listings/listing1.jpg'], city: "Lagos", area: "Yaba", title: "Double room in a 3-bed flat", price: 650000, verified: true, roommate: "need", gender: "Any", who: "Two flatmates, both working", tags: ["Prepaid meter", "No smoking", "Quiet after 10pm"] },
  { id: 2, images: ['/images/listings/listing2.jpg'], city: "Lagos", area: "Surulere", title: "Self-contained room with shared kitchen", price: 480000, verified: false, roommate: "need", gender: "Any", who: "One flatmate, student", tags: ["Borehole water", "Guests on weekends"] },
  { id: 3, images: ['/images/listings/listing3.jpg'], city: "Lagos", area: "Lekki", title: "Master room, ensuite", price: 3200000, verified: true, roommate: "need", gender: "Any", who: "Two flatmates, remote workers", tags: ["Generator backup", "Cleaner weekly", "No pets"] },
  { id: 4, images: ['/images/listings/listing4.jpg'], city: "Abuja", area: "Gwarinpa", title: "Double room with shared kitchen", price: 900000, verified: true, roommate: "need", gender: "Female", who: "Two flatmates, 20s", tags: ["Estate security", "Guests on weekends"] },
  { id: 5, images: ['/images/listings/listing5.jpg'], city: "Abuja", area: "Jabi", title: "Room near Jabi Lake", price: 1300000, verified: false, roommate: "need", gender: "Male", who: "One flatmate, remote worker", tags: ["Fast internet", "Quiet after 10pm"] },
  { id: 6, images: ['/images/listings/listing6.jpg'], city: "Abuja", area: "Kubwa", title: "Single room, shared bathroom", price: 380000, verified: false, roommate: "need", gender: "Any", who: "Three flatmates", tags: ["Budget friendly", "Longer commute"] },
  { id: 7, images: ['/images/listings/listing7.jpg'], city: "Abuja", area: "Lugbe", title: "NYSC-friendly room", price: 450000, verified: true, roommate: "need", gender: "Any", who: "Two corps members", tags: ["Water included", "Near the airport road"] },
  { id: 8, images: ['/images/listings/listing8.jpg'], city: "Abuja", area: "Asokoro", title: "Spacious room with parking", price: 2700000, verified: true, roommate: "dont", gender: "Any", who: "Private room, owner lives upstairs", tags: ["Estate security", "Parking", "Pets allowed"] },
];


export const formatPrice = (n) => "₦" + n.toLocaleString("en-NG");