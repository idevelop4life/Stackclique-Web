import { Switch } from "@headlessui/react";

export default function Toogle({ enabled, setEnabled }) {
    return (
        <div className="flex items-center">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-primary-500" : "bg-darkGrey"}
          relative inline-flex h-[1.2rem] items-center w-[2.3rem] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${
                        enabled ? "translate-x-full" : "translate-x-0"
                    }
            pointer-events-none inline-block h-[1rem] w-[1rem] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
}
