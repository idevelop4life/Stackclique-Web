export default function Backdrop({ children }) {
    return (
        <div className="backdrop-opacity-5 backdrop-invert bg-white/20 top-0 left-0 right-0 bottom-0 fixed flex items-center justify-center min-w-screen min-h-screen z-[2000] ">
            {children}
        </div>
    );
}
