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
            <p className="top-0 left-0 w-full text-primary">
                Benefit from a range of features
            </p>
            <h2 className="text-[1.6rem]  top-10 left-0 lg:text-[2.625rem] lg:leading-[3.75rem] font-[800]">
                Explore unique features <br /> designed to help you grow
            </h2>
            <div className="flex flex-col items-end gap-2 justify-evenly md:flex-row">
                {benefitsSectionData.map((item) => (
                    <div
                        key={item.id}
                        className={`md:w-[18rem] lg:w-[20rem] relative ${
                            item.id == 1
                                ? "md:mb-[4rem]"
                                : item.id == 2
                                ? "md:mb-[12rem]"
                                : "md:mb-[16rem]"
                        } flex flex-col  gap-4`}
                    >
                        <h2 className="font-[700] bg-transparent text-[1rem] md:text-[1.2rem]">
                            {item.heading}
                        </h2>
                        <p className="text-sm leading-6 bg-transparent">
                            {item.body}
                        </p>
                        <p className="absolute top-[-3rem] md:top-[-6rem] right-0 font-black font-manrope text-6xl md:text-9xl text-darkGrey opacity-20">
                            {item.id}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
