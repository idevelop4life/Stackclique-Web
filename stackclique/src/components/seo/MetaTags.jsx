import { Helmet } from "react-helmet-async";
import { getTheme, getURLOrigin, getURLSource } from "../../utils/navigate";
import bannerImg from "/logo.webp";
import logoImg from "/logo.webp";

function MetaTags({
    title = "Stackclique - Invest in Your Learning Journey",
    desc = "Welcome to the Stackclique Learning App, your personalized path to mastering the ever-changing world of technology. ",
    index = false,
    follow = false,
    keywords = "",
}) {
    const pageLink = getURLSource();
    const imgW = "800";
    const imgH = "600";
    const type = "website";
    const schemaObj = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        name: title,
        description: desc,
        keywords: keywords ? keywords : "",
        image: {
            "@type": "ImageObject",
            url: `${getURLOrigin()}${bannerImg}`,
            width: imgW,
            height: imgH,
        },
    };

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={logoImg} />
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={desc} />
                <meta name="publisher" content="Agunwami Enterprise" />
                <meta name="theme-color" content={getTheme()} />
                <link rel="canonical" href={getURLOrigin()} />
                <link rel="apple-touch-icon" href={logoImg} />
                ---------------------------------------------------
                <meta
                    name="robots"
                    content={`${index ? "index" : "noindex"}, ${
                        follow ? "follow" : "nofollow"
                    }`}
                />
                <meta
                    name="X-Robots-Tag"
                    content={`${index ? "index" : "noindex"}, ${
                        follow ? "follow" : "nofollow"
                    }`}
                />
                <meta name="keywords" content={keywords ? keywords : ""} />
                ---------------------------------------------------
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta
                    name="twitter:image"
                    content={`${getURLOrigin()}${bannerImg}`}
                />
                <meta name="twitter:card" content={desc?.slice(0, 120)} />
                ---------------------------------------------------
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta
                    property="og:image"
                    content={`${getURLOrigin()}${bannerImg}`}
                />
                <meta property="og:image:width" content={imgW} />
                <meta property="og:image:height" content={imgH} />
                <meta property="og:url" content={pageLink} />
                <meta property="og:type" content={type} />
                ---------------------------------------------------
                <script type="application/ld+json">{`${JSON.stringify(
                    schemaObj,
                )}`}</script>
            </Helmet>
        </>
    );
}

export default MetaTags;
