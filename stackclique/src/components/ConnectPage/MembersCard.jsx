import { Avatar } from "../ui";

export default function MembersCard() {
    return (
        <div className="flex items-center gap-4 text-sm">
            <Avatar size={"small"} />
            <p>Sunday Anderson</p>
        </div>
    );
}
