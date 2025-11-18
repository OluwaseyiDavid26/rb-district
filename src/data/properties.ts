const propertyListings = [
  {
    id: "fully-detached",
    title: "Fully Detached Duplex",
    text: "5 ensuite bedrooms",
    mainImage: "/properties/fully-detached.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "🌿 Serene Environment",
        description:
          "Enjoy peace and privacy in a well-planned neighborhood, just minutes from the heart of Akure.",
      },
      {
        title: "🛋 Spacious Living Areas",
        description:
          "Designed for both comfort and connection. It’s perfect for family life and effortless hosting.",
      },
      {
        title: "🍳 Modern, Functional Kitchen",
        description:
          "Cook and gather in a contemporary kitchen that balances style with everyday practicality.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "Ensuite BQ" },
      { icon: "/highlights/dining.png", label: "Dining Area" },
      { icon: "/highlights/balcony.png", label: "Large Balcony" },
      { icon: "/highlights/kitchen.png", label: "Kitchen" },
      { icon: "/highlights/lounge.png", label: "2 lounges" },
      { icon: "/highlights/pantry.png", label: "Large Pantry" },
    ],
    summary: {
      heading: "Your Private Haven in Akure’s Most Promising District",
      paragraph:
        "Step into luxury with this fully detached 5-bedroom duplex designed for families who crave space, comfort, and security. From the expansive balcony that catches the evening breeze to the warm, inviting lounge areas perfect for hosting, every inch of this home tells a story of thoughtful design. Whether you’re enjoying a quiet moment in the private BQ or cooking Sunday brunch in your modern kitchen, life here feels just right.",
    },
    payment: {
      price: "₦120 Million",
      landSize: "640 sqm",
      builtArea: "153 sqm",
      installment: "Installment: 50% initial deposit, balance within 12 months",
    },
    map: {
      lat: 7.2399811,
      lng: 5.2113914,
    },
  },
  {
    id: "luxury-apartment",
    title: "Luxury Apartment",
    text: "1 bedroom",
    mainImage: "/properties/luxury-apartment.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "🌟 Premium Location",
        description:
          "Located in the heart of Alagbaka, close to major amenities and business districts.",
      },
      {
        title: "🏊‍♂️ Resort-Style Living",
        description:
          "Access to shared facilities including swimming pool and fitness center.",
      },
      {
        title: "🔒 24/7 Security",
        description:
          "Round-the-clock security with modern surveillance systems.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "Ensuite Bathroom" },
      { icon: "/highlights/dining.png", label: "Open Plan Living" },
      { icon: "/highlights/balcony.png", label: "Private Balcony" },
      { icon: "/highlights/kitchen.png", label: "Fitted Kitchen" },
      { icon: "/highlights/lounge.png", label: "Lounge Access" },
      { icon: "/highlights/pantry.png", label: "Storage Space" },
    ],
    summary: {
      heading: "Elevated Living in the Heart of Akure",
      paragraph:
        "Experience modern living in this beautifully designed luxury apartment. Perfect for professionals or small families, this space combines comfort with convenience. The open-plan design maximizes space while the private balcony offers stunning city views.",
    },
    payment: {
      price: "₦45 Million",
      landSize: "N/A",
      builtArea: "85 sqm",
      installment: "Installment: 40% initial deposit, balance within 6 months",
    },
    map: {
      lat: 7.2361088,
      lng: 5.217606,
    },
  },
  {
    id: "semi-detached-duplex",
    title: "Semi-Detached Duplex",
    text: "4 bedrooms (3 ensuite)",
    mainImage: "/properties/semi-detached.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "🏡 Family-Friendly Design",
        description: "Thoughtfully designed spaces that grow with your family.",
      },
      {
        title: "🌳 Private Garden",
        description:
          "Enjoy outdoor living with a beautifully landscaped private garden.",
      },
      {
        title: "🚗 Double Parking",
        description:
          "Secure parking space for two vehicles with additional visitor parking.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "3 Ensuite Rooms" },
      { icon: "/highlights/dining.png", label: "Family Dining" },
      { icon: "/highlights/balcony.png", label: "Terrace" },
      { icon: "/highlights/kitchen.png", label: "Modern Kitchen" },
      { icon: "/highlights/lounge.png", label: "Family Lounge" },
      { icon: "/highlights/pantry.png", label: "Study Room" },
    ],
    summary: {
      heading: "Where Luxury Meets Practicality",
      paragraph:
        "This semi-detached duplex offers the perfect balance of privacy and community living. With four spacious bedrooms, including three en-suite, it's ideal for growing families. The modern design incorporates both style and functionality, creating spaces that work for both everyday living and entertaining.",
    },
    payment: {
      price: "₦85 Million",
      landSize: "450 sqm",
      builtArea: "280 sqm",
      installment: "Installment: 50% initial deposit, balance within 12 months",
    },
    map: {
      lat: 7.23667,
      lng: 5.2116151,
    },
  },
  {
    id: "studio-apartment",
    title: "Studio Apartment",
    text: "1 bedroom",
    mainImage: "/properties/luxury-apartment.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "💼 Smart Living",
        description: "Efficient design that maximizes every square foot.",
      },
      {
        title: "🌆 City Views",
        description: "Large windows offering beautiful views of Akure.",
      },
      {
        title: "⚡ Modern Amenities",
        description: "Built-in appliances and contemporary fixtures.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "Bathroom" },
      { icon: "/highlights/dining.png", label: "Breakfast Bar" },
      { icon: "/highlights/balcony.png", label: "Juliet Balcony" },
      { icon: "/highlights/kitchen.png", label: "Kitchenette" },
      { icon: "/highlights/lounge.png", label: "Living Area" },
      { icon: "/highlights/pantry.png", label: "Storage" },
    ],
    summary: {
      heading: "Compact Luxury for Modern Living",
      paragraph:
        "Perfect for young professionals or investors, this studio apartment combines style with practicality. The intelligent layout makes the most of available space, while high-end finishes add a touch of luxury to every corner.",
    },
    payment: {
      price: "₦28 Million",
      landSize: "N/A",
      builtArea: "45 sqm",
      installment: "Installment: 30% initial deposit, balance within 6 months",
    },
    map: {
      lat: 7.2366699,
      lng: 5.2038902,
    },
  },
  {
    id: "retail-spaces",
    title: "Retail Spaces & Amenities",
    text: "Within the Nexus Block",
    mainImage: "/properties/retail-spaces.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "🏪 Prime Location",
        description:
          "High-visibility spaces in a bustling commercial district.",
      },
      {
        title: "⚡ Modern Infrastructure",
        description: "Ready-to-use spaces with all necessary utilities.",
      },
      {
        title: "🚶‍♂️ High Foot Traffic",
        description:
          "Benefit from the estate's resident population and visitors.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "Washrooms" },
      { icon: "/highlights/dining.png", label: "Food Court" },
      { icon: "/highlights/balcony.png", label: "Display Windows" },
      { icon: "/highlights/kitchen.png", label: "Utility Room" },
      { icon: "/highlights/lounge.png", label: "Common Area" },
      { icon: "/highlights/pantry.png", label: "Storage Unit" },
    ],
    summary: {
      heading: "Prime Commercial Spaces in RBD Estate",
      paragraph:
        "Establish your business in Akure's newest commercial hub. These retail spaces offer the perfect opportunity for businesses looking to serve an affluent community. With flexible layouts and modern amenities, these spaces can be customized to suit various business needs.",
    },
    payment: {
      price: "₦65 Million",
      landSize: "varies",
      builtArea: "75-200 sqm",
      installment: "Installment: 60% initial deposit, balance within 6 months",
    },
    map: {
      lat: 7.2399811,
      lng: 5.2113914,
    },
  },
  {
    id: "work-spaces",
    title: "WorkSpaces & Offices",
    text: "Within the Nexus Block",
    mainImage: "/properties/retail-spaces.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "🏪 Prime Location",
        description:
          "High-visibility spaces in a bustling commercial district.",
      },
      {
        title: "⚡ Modern Infrastructure",
        description: "Ready-to-use spaces with all necessary utilities.",
      },
      {
        title: "🚶‍♂️ High Foot Traffic",
        description:
          "Benefit from the estate's resident population and visitors.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "Washrooms" },
      { icon: "/highlights/dining.png", label: "Food Court" },
      { icon: "/highlights/balcony.png", label: "Display Windows" },
      { icon: "/highlights/kitchen.png", label: "Utility Room" },
      { icon: "/highlights/lounge.png", label: "Common Area" },
      { icon: "/highlights/pantry.png", label: "Storage Unit" },
    ],
    summary: {
      heading: "Prime Commercial Spaces in RBD Estate",
      paragraph:
        "Establish your business in Akure's newest commercial hub. These retail spaces offer the perfect opportunity for businesses looking to serve an affluent community. With flexible layouts and modern amenities, these spaces can be customized to suit various business needs.",
    },
    payment: {
      price: "₦65 Million",
      landSize: "varies",
      builtArea: "75-200 sqm",
      installment: "Installment: 60% initial deposit, balance within 6 months",
    },
    map: {
      lat: 7.2399811,
      lng: 5.2113914,
    },
  },
  {
    id: "premium-apartment",
    title: "Premium Apartment",
    text: "1 bedroom",
    mainImage: "/properties/luxury-apartment.jpg",
    otherImages: [
      "/properties/fully-detached-1.png",
      "/properties/fully-detached-2.png",
      "/properties/fully-detached-3.png",
      "/properties/fully-detached-4.png",
    ],
    features: [
      {
        title: "🌟 Premium Location",
        description:
          "Located in the heart of Alagbaka, close to major amenities and business districts.",
      },
      {
        title: "🏊‍♂️ Resort-Style Living",
        description:
          "Access to shared facilities including swimming pool and fitness center.",
      },
      {
        title: "🔒 24/7 Security",
        description:
          "Round-the-clock security with modern surveillance systems.",
      },
    ],
    highlights: [
      { icon: "/highlights/ensuite.png", label: "Ensuite Bathroom" },
      { icon: "/highlights/dining.png", label: "Open Plan Living" },
      { icon: "/highlights/balcony.png", label: "Private Balcony" },
      { icon: "/highlights/kitchen.png", label: "Fitted Kitchen" },
      { icon: "/highlights/lounge.png", label: "Lounge Access" },
      { icon: "/highlights/pantry.png", label: "Storage Space" },
    ],
    summary: {
      heading: "Elevated Living in the Heart of Akure",
      paragraph:
        "Experience modern living in this beautifully designed luxury apartment. Perfect for professionals or small families, this space combines comfort with convenience. The open-plan design maximizes space while the private balcony offers stunning city views.",
    },
    payment: {
      price: "₦45 Million",
      landSize: "N/A",
      builtArea: "85 sqm",
      installment: "Installment: 40% initial deposit, balance within 6 months",
    },
    map: {
      lat: 7.2361088,
      lng: 5.217606,
    },
  },
];

export default propertyListings;
