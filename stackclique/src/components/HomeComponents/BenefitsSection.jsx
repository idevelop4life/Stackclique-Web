const benefitsSectionData = [
    {
        id: 1,
        heading: "Keep Up With Your Affiliates",
        body: "Use Metricks In-app messaging feature to communicate with your affiliates in real-time. Set up group chats and send direct messages",
    },
    {
        id: 2,
        heading: "Single Access With One Sign-Up",
        body: "Enable your affiliates access all your active campaigns when they join your affiliate network with one sign up",
    },
    {
        id: 3,
        heading: "Manage Multiple Commission Structures",
        body: "Set up multiple campaigns with different commission structures and enable your affiliates to earn override commissions from their referrals",
    },
];

export default function BenefitsSection() {
    return (
        <section className="px-4 md:px-[3rem] font-poppins relative h-[42.1875rem] ">
            <p className="top-0 left-0 w-full text-primary-500">
                Benefit from a range of features
            </p>
            <h2 className="text-[1.6rem]  top-10 left-0 lg:text-[2.625rem] lg:leading-[3.75rem] font-[800]">
                Explore unique features <br /> designed to help you grow
            </h2>

            <div
                className="flex flex-col items-end gap-2 justify-between md:flex-row px-[2rem]"
                style={{
                    position: "absolute",
                    width: "-webkit-fill-available",
                    top: "8rem",
                }}
            >
                {benefitsSectionData.map((item) => (
                    <>
                        <div
                            key={item.id}
                            className={`md:w-[14rem] lg:w-[18rem] z-[20] relative ${
                                item.id == 1
                                    ? "md:mb-[2rem]"
                                    : item.id == 2
                                    ? "md:mb-[8rem]"
                                    : "md:mb-[14rem]"
                            } flex flex-col  gap-4`}
                        >
                            <svg
                                width="59"
                                height="64"
                                viewBox="0 0 59 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: "max-content" }}
                            >
                                <rect
                                    x="0.591309"
                                    width="57.8783"
                                    height="64"
                                    rx="20"
                                    fill="white"
                                />
                                <rect
                                    x="18.6782"
                                    y="20"
                                    width="20.8"
                                    height="23"
                                    rx="10"
                                    fill="#13B351"
                                />
                            </svg>

                            <h2 className="font-[700] bg-transparent text-[1rem] md:text-[1.2rem]">
                                {item.heading}
                            </h2>
                            <p className="text-sm leading-6 bg-transparent">
                                {item.body}
                            </p>
                            <p className="absolute top-[-3rem] md:top-[-6rem] right-0 font-extralight font-manrope text-[12.75rem] md:text-[12.75rem] text-darkGrey opacity-20">
                                {item.id}
                            </p>
                        </div>
                    </>
                ))}
                {/* <svg
                    width="974"
                    height="449"
                    viewBox="0 0 974 449"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", left: 0, zIndex: 10 }}
                >
                    <g filter="url(#filter0_d_1_2352)">
                        <path
                            d="M27 311C70.4087 346 171.515 412 228.67 396C300.113 376 305.07 255 415.401 231C525.731 207 619.348 308.5 704.809 188C790.27 67.5003 831.87 -11.4997 946.722 5.50027"
                            stroke="#A80B98"
                            strokeOpacity="0.51"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            shapeRendering="crispEdges"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_1_2352"
                            x="0.5"
                            y="0.703125"
                            width="972.722"
                            height="448.256"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="24" />
                            <feGaussianBlur stdDeviation="12" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_2352"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1_2352"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg> */}
            </div>
        </section>
    );
}
