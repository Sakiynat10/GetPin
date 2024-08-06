import Head from 'next/head';

const SEO = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://yourwebsite.com" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yourwebsite.com" />
            <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
        </Head>
    );
};

export  default SEO;