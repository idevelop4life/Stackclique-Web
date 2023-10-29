import { Avatar } from "../ui";

export default function MembersCard() {
    return (
        <div className="flex items-center gap-4">
            <Avatar size={"small"} />
            <p>Sunday Anderson</p>
        </div>
    );
}
