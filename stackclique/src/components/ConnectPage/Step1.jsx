import { useState } from "react";
import { Button } from "../ui";
import Toogle from "../ui/Toogle";

export default function Step1() {
    const [description, setDescription] = useState(
        "This Group was created for Product management beginners",
    );
    const [mediaVisible, setMediaVisible] = useState("default");
    const [muted, setMuted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const values = { description, mediaVisible, muted };
        console.log(values);
    };

    return (
        <form className="relative flex flex-col mt-4" onSubmit={onSubmit}>
            <div className="flex items-center w-full p-2 overflow-auto border">
                <textarea
                    name="description"
                    id=""
                    draggable="false"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full outline-none max-h-[4rem] resize-none rounded-md"
                />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Settings</h2>
            <h3>Media visibility</h3>
            <div className="flex flex-col">
                <div className="flex gap-2">
                    <input
                        type="radio"
                        name="media-visible"
                        value="true"
                        checked={mediaVisible === "true"}
                        onChange={(e) => setMediaVisible(e.target.value)}
                        id="yes"
                        className="accent-primary-500"
                    />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div className="flex gap-2">
                    <input
                        type="radio"
                        name="media-visible"
                        value="no"
                        id="no"
                        checked={mediaVisible === "no"}
                        className="accent-primary-500"
                        onChange={(e) => setMediaVisible(e.target.value)}
                    />
                    <label htmlFor="no">No</label>
                </div>
                <div className="flex gap-2">
                    <input
                        type="radio"
                        name="media-visible"
                        checked={mediaVisible === "default"}
                        value="default"
                        id=""
                        onChange={(e) => setMediaVisible(e.target.value)}
                        className="accent-primary-500"
                    />
                    <label htmlFor="Default">Default</label>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="text-sm">Mute Notifications</p>
                <span>
                    <Toogle enabled={muted} setEnabled={setMuted} />
                </span>
            </div>
            <Button className={"h-[2.5rem] self-end px-4"}>Save</Button>
        </form>
    );
}
