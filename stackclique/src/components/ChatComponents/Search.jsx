function Search({ type, placeholder, classCustom, onChangeFun = null }) {
    switch (type) {
        case "classic":
            return (
                <Classic
                    placeholder={placeholder}
                    classCustom={classCustom}
                    onChangeFun={onChangeFun}
                />
            );
        case "minimalistic":
            return (
                <Minimalistic
                    placeholder={placeholder}
                    classCustom={classCustom}
                    onChangeFun={onChangeFun}
                />
            );
    }
}

function Classic({ placeholder, classCustom, onChangeFun }) {
    return (
        <div className={`form_search_gen ${classCustom || ""}`}>
            <button type="submit" className="btn">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.5216 11.2017L11.1567 8.83676L9.33763 8.08522C9.94332 7.22388 10.2678 6.19631 10.2666 5.14333C10.2666 2.3128 7.96385 0.0100098 5.13332 0.0100098C2.30279 0.0100098 0 2.3128 0 5.14333C0 7.97386 2.30279 10.2767 5.13332 10.2767C6.19546 10.2779 7.23153 9.94776 8.0972 9.33233L8.84678 11.1465L11.2116 13.5115C11.3633 13.6632 11.5434 13.7835 11.7415 13.8656C11.9397 13.9477 12.1521 13.99 12.3666 13.99C12.5811 13.99 12.7935 13.9478 12.9917 13.8657C13.1898 13.7836 13.3699 13.6633 13.5216 13.5116C13.6732 13.36 13.7936 13.1799 13.8756 12.9817C13.9577 12.7836 14 12.5712 14 12.3567C14 12.1422 13.9578 11.9298 13.8757 11.7316C13.7936 11.5334 13.6733 11.3534 13.5216 11.2017ZM0.933331 5.14333C0.933331 2.8275 2.81749 0.943341 5.13332 0.943341C7.44915 0.943341 9.33331 2.8275 9.33331 5.14333C9.33331 7.45916 7.44915 9.34332 5.13332 9.34332C2.81749 9.34332 0.933331 7.45916 0.933331 5.14333ZM12.8616 12.8516C12.7302 12.9827 12.5522 13.0563 12.3666 13.0563C12.181 13.0563 12.003 12.9827 11.8717 12.8516L9.63831 10.6183L8.9414 8.9314L10.6283 9.62831L12.8617 11.8617C12.9927 11.993 13.0663 12.1711 13.0663 12.3566C13.0663 12.5422 12.9927 12.7202 12.8616 12.8516Z"
                        fill="white"
                    />
                </svg>
            </button>
            <input
                type="search"
                name="msgsearch"
                id=""
                className="text-box"
                placeholder={placeholder || "Search messages"}
                onChange={onChangeFun}
            />
        </div>
    );
}

function Minimalistic({ placeholder, classCustom, onChangeFun }) {
    return (
        <div className={`form_search_minimal ${classCustom || ""}`}>
            <button type="submit" className="btn_mini">
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_401_3536)">
                        <path
                            d="M14 0.300049H10C4.47715 0.300049 0 4.7772 0 10.3V14.3C0 19.8229 4.47715 24.3 10 24.3H14C19.5228 24.3 24 19.8229 24 14.3V10.3C24 4.7772 19.5228 0.300049 14 0.300049Z"
                            fill="#EFEFEF"
                        />
                        <path
                            d="M14.0996 13.5H13.6256L13.4576 13.338C14.0659 12.6324 14.4003 11.7316 14.3996 10.8C14.3996 10.0287 14.1709 9.27465 13.7423 8.6333C13.3138 7.99195 12.7047 7.49208 11.9921 7.1969C11.2794 6.90171 10.4953 6.82448 9.73876 6.97496C8.98223 7.12545 8.28732 7.49688 7.74189 8.04231C7.19647 8.58773 6.82503 9.28265 6.67455 10.0392C6.52407 10.7957 6.6013 11.5799 6.89648 12.2925C7.19166 13.0051 7.69154 13.6142 8.33289 14.0428C8.97424 14.4713 9.72826 14.7 10.4996 14.7C11.4656 14.7 12.3536 14.346 13.0376 13.758L13.1996 13.926V14.4L16.1996 17.394L17.0936 16.5L14.0996 13.5ZM10.4996 13.5C9.00561 13.5 7.79961 12.294 7.79961 10.8C7.79961 9.30603 9.00561 8.10003 10.4996 8.10003C11.9936 8.10003 13.1996 9.30603 13.1996 10.8C13.1996 12.294 11.9936 13.5 10.4996 13.5Z"
                            fill="#020202"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_401_3536">
                            <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.300049)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <input
                type="search"
                name="msgsearch"
                id=""
                className="text-box"
                placeholder={placeholder || "Search messages"}
                onChange={onChangeFun}
            />
        </div>
    );
}

export default Search;
