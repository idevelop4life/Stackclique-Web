import clsx from "clsx";
import AvatarImg from "../../assets/svg/avatar-image.svg";
export default function Avatar({ img, size, bgColor }) {
    return (
        <div
            className={clsx(" rounded-full", {
                "h-[2rem] w-[2rem]": size === "small",
                "h-[3.5rem] w-[3.5rem]": size === "large",
                "h-[5rem] w-[5rem]": size === "v-large",
            })}
            style={{ backgroundColor: bgColor || "white" }}
        >
            <img
                src={img || AvatarImg}
                alt="avatar"
                className="object-cover w-full h-full"
            />
        </div>
    );
}
