
    const CONFIG = {
        /**
         * Choose a predefined theme:
         *
         * - "ashes-dark"
         * - "gruvbox-dark"
         * - "nord-dark"
         * - "ocean-light"
         * - "tilde-dark"
         * - "tokyo-dark"
         *
         * Alternatively, create your own in the <style> tag below!
         */
        theme: 'tilde-dark',

        /**
         * Action to take when the clock is clicked. Options include:
         *
         * - "Help" to show the help menu
         * - "Search" to show the search input (useful on mobile)
         */
        clockOnClickAction: 'Help',

        /**
         * The delimiter between the hours, minutes and seconds on the clock.
         */
        clockDelimiter: ':',

        /**
         * Show seconds on the clock. A monospaced font is recommended for this.
         */
        clockShowSeconds: false,

        /**
         * Show AM/PM indication when CONFIG.clockTwentyFourHours is false.
         */
        clockShowAmPm: true,

        /**
         * Show a twenty-four-hour clock instead of a twelve-hour clock.
         */
        clockTwentyFourHour: false,

        /**
         * Force an IANA timezone. Useful when attempting to prevent browser
         * fingerprinting. For example, "America/Los_Angeles" would force Pacific
         * Time, "Asia/Kolkata" would force Indian Standard Time, etc. Read:
         *
         * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
         */
        clockTimeZone: undefined,

        /**
         * Type this to toggle the help menu.
         */
        helpKey: '?',

        /**
         * Instantly redirect when a key is matched. Put a space before any other
         * queries to prevent unwanted redirects.
         */
        queryInstantRedirect: true,

        /**
         * Open triggered queries in a new tab.
         */
        queryNewTab: false,

        /**
         * The delimiter between a command key and a path. For example, you'd type
         * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
         */
        queryPathDelimiter: '/',

        /**
         * The delimiter between a command key and your search query. For example,
         * to search GitHub for tilde, you'd type "g'tilde".
         */
        querySearchDelimiter: "'",

        /**g
         * Scripts allow you to open or search multiple sites at once. For example,
         * to search Google, Bing, DuckDuckGo, Ecosia and Yahoo for cats at the same
         * time, you'd type "q'cats".
         */
        scripts: {
            q: ['bin', 'yah', 'eco', 'ddg', '*'],
        },

        /**
         * The order, limit and minimum characters for each suggestion influencer.
         *
         * An "influencer" is just a suggestion source. "limit" is the max number of
         * suggestions an influencer will produce. "minChars" determines how many
         * characters need to be typed before the influencer kicks in.
         *
         * The following influencers are available:
         *
         * - "Default" suggestions come from CONFIG.suggestionDefaults (sync)
         * - "History" suggestions come from your previously entered queries (sync)
         * - "DuckDuckGo" suggestions come from the DuckDuckGo search API (async)
         *
         * To disable suggestions, remove all influencers.
         */
        suggestionInfluencers: [
            { name: 'Default', limit: 4 },
            { name: 'History', limit: 4, minChars: 2 },
            { name: 'DuckDuckGo', limit: 4, minChars: 2 },
        ],

        /**
         * Max number of suggestions that will ever be shown.
         */
        suggestionLimit: 5,

        /**
         * Default search suggestions for the specified queries.
         */
        suggestionDefaults: {
            localhost: ["0'8000", "0'8080"],
            //a: ['a/cognito/v2/idp/user-pools', 'a/dynamodbv2#item-explorer'],
            //cal: ['c/calendar/u/1/r', 'c/calendar/u/2/r'],
            //drive: ['d/drive/u/1/my-drive', 'd/drive/u/2/my-drive'],
            //g: ['g/trending', 'g/ossu', 'g/cadejscroggins/tilde', 'gist.github.com'],
            //j: ['j/popular', 'j/popular/lastweek', 'j/tags'],
            //k: ['k/u/1', 'k/u/2'],
            //m: ['m/mail/u/1', 'm/mail/u/2'],
            //o: ['o/discover/sets/new-for-you', 'o/discover/sets/weekly'],
            //p: ['p/beema.finance'],
            //r: ['r/r/startpages', 'r/r/unixporn', 'r/r/onebag', 'r/r/fujix'],
            //s: ['s/collection/tracks', 's/playlist/37i9dQZEVXcXr3r4FYT3J7'],
            //u: ['u/explore', 'u/backgrounds'],
            //youtube: ['y/feed/trending'],
        },

        /**
         * The name, key, url, search path and color for your commands. If none of
         * the specified keys are matched, the * key is used. Commands without a
         * name don't show up in the help menu.
         *
         * "hues" is an array of HSL hues that will be converted into a linear
         * gradient. CSS variables defined below, prefixed with --command-color-,
         * determine the saturation and lightness for each generated color.
         *
         * "color", if defined, will be applied to the command as-is.
         */
        commands: [
            {
                key: '*',
                search: '/search?q={}',
                url: 'https://www.google.com',
            },
            {
                hues: ['0', '0'],
                key: 'music',
                name: 'Apple Music',
                url: 'https://music.apple.com/us/browse',
            },
            {
                hues: ['0', '5'],
                key: 'yt',
                name: 'YouTube',
                search: '/results?search_query={}',
                url: 'https://youtube.com/',
            },
            {
                hues: ['0', '79'],
                key: 'gmail',
                name: 'Google Mail',
                search: '/mail/u/0/?q={}#search/{}',
                url: 'https://mail.google.com/mail/u/0',
            },
            {
                hues: ['50', '50'],
                key: 'amazon',
                name: 'Amazon',
                url: 'https://amazon.com/',
            },
            {
                hues: ['0', '156'],
                key: 'ebay',
                name: 'EBay',
                url: 'https://ebay.com/',
            },
            {
                hues: ['120', '30'],
                key: 'studentvue',
                name: 'StudentVue',
                url: 'https://va-pwcps-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True',
            },
            {
                // hues: ['266', '286'],
                hues: ['103', '138'],
                key: 'tracker',
                name: 'TrackerHub',
                url: 'https://trackerhub.cx/',
            },
            {
                hues: ['128', '135'],
                key: 'comps',
                name: 'Comps',
                url: 'https://docs.google.com/spreadsheets/d/11t9f4FtNou5oZ08CXcPkfhE60qMM26pbEfmNvOfccJ0/edit?gid=1142030474#gid=1142030474',
            },
            {
                hues: ['138', '138'],
                key: 'gpt',
                name: 'ChatGPT',
                url: 'https://chat.openai.com/',
            },
            {
                hues: ['120', '130'],
                key: 'git',
                name: 'GitHub',
                search: '/search?q={}',
                url: 'https://github.com/',
            },
            {
                hues: ['204', '204'],
                key: 'ye',
                name: 'Ye Tracker',
                url: 'https://trackerhub.cx/sh/1rF0sa1_EwhrSHuZfUhOny_cmbsxZ4NYi5Yn3XVSFlZc/recent',
            },
            {
                hues: ['231', '212'],
                key: 'ds',
                name: 'DeepSeek',
                url: 'https://chat.deepseek.com/',
            },
            {
                hues: ['230', '294'],
                key: 'copilot',
                name: 'Copilot',
                url: 'https://copilot.microsoft.com/',
            },
            {
                hues: ['298', '298'],
                key: 'cobalt',
                name: 'Cobalt',
                url: 'https://cobalt.tools/',
            },
            {
                hues: ['288', '27'],
                key: 'insta',
                name: 'Instagram',
                url: 'https://instagram.com/',
            },
        ].map((command) => {
            const hsla = (hue, saturation = 'var(--command-color-saturation)') =>
                `hsla(${hue}, ${saturation}, var(--command-color-lightness), 1)`;

            if (command.color || !command.name) {
                return command;
            } else if (!Array.isArray(command.hues) || !command.hues.length) {
                command.color = hsla(0, '0%');
            } else if (command.hues.length === 1) {
                command.color = hsla(command.hues[0]);
            } else {
                const c = command.hues.reduce((a, h) => `${a}, ${hsla(h)}`, '');
                command.color = `linear-gradient(135deg ${c})`;
            }

            return command;
        }),
    };



