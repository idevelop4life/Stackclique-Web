import clsx from "clsx";
import AvatarImg from "../../assets/svg/avatar-image.svg";
export default function Avatar({ img, size }) {
    return (
        <div
            className={clsx("h-[3rem] w-[3rem] rounded-full", {
                "h-[2rem] w-[2rem]": size === "small",
                "h-[3.5rem] w-[3.5rem]": size === "large",
            })}
        >
            <img
                src={img || AvatarImg}
                alt="avatar"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
