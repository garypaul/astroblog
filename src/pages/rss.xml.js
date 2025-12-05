import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Astro Gary | Blog',
        description: 'Astro blog by Gary Armstrong',
        site: context.site,
        items: await pagesGlobToRssItems( import.meta.glob('./**/*.md') ),
        customData: `<language>en-ca</language>`
    })
}