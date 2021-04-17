const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
import FeaturePostData from "./components/data";


async function getDynamicPaths() {
    const data = FeaturePostData.map((feature) => (
        feature.slug
    ));

    return data.map((item) => `/business-setup/${item}`);
}



getDynamicPaths().then((paths) => {
    const Sitemap = configureSitemap({
        baseUrl: 'https://jbz.vercel.app',
        include: paths,
        exclude: ['/business-setup/*'],
        excludeIndex: true,
        pagesConfig: {
            '/business-setup/*': {
                priority: '0.5',
                changefreq: 'daily',
            },
        },
        isTrailingSlashRequired: true,
        targetDirectory: __dirname + '/public',
        pagesDirectory: __dirname + '/pages',
    });
    Sitemap.generateSitemap();
});