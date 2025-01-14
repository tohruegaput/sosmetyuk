const platforms = [
    // Existing platforms
    { name: 'Instagram', url: 'https://instagram.com/{username}', icon: '📸' },
   { name: 'Facebook', url: 'https://facebook.com/{username}', icon: '👤' },
   { name: 'X', url: 'https://x.com/{username}', icon: '𝕏' },
    { name: 'Twitter', url: 'https://twitter.com/{username}', icon: '🐦' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/{username}', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/{username}', icon: '💻' },
    { name: 'YouTube', url: 'https://youtube.com/@{username}', icon: '🎥' },
    { name: 'TikTok', url: 'https://tiktok.com/@{username}', icon: '🎵' },
    { name: 'Pinterest', url: 'https://pinterest.com/{username}', icon: '📌' },
    { name: 'Reddit', url: 'https://reddit.com/user/{username}', icon: '🤖' },
    { name: 'Twitch', url: 'https://twitch.tv/{username}', icon: '🎮' },
    { name: 'Fanhouse', url: 'https://fanhouse.app/{username}', icon: '🏠' },
    { name: 'Fansly', url: 'https://fansly.com/{username}', icon: '💫' },
    { name: 'Minds', url: 'https://minds.com/{username}', icon: '🧠' },
    { name: 'Parler', url: 'https://parler.com/{username}', icon: '💭' },
    { name: 'Gab', url: 'https://gab.com/{username}', icon: '🗣️' },
    { name: 'MeWe', url: 'https://mewe.com/{username}', icon: '👥' },
    { name: 'Plurk', url: 'https://plurk.com/{username}', icon: '🌈' },
    { name: 'Diaspora', url: 'https://diaspora.com/{username}', icon: '🌐' },
    { name: 'Ello', url: 'https://ello.co/{username}', icon: '⚫' },
    { name: 'Steemit', url: 'https://steemit.com/@{username}', icon: '📝' },
    { name: 'Hive', url: 'https://hive.blog/@{username}', icon: '🐝' },
    { name: 'Peepeth', url: 'https://peepeth.com/{username}', icon: '🐦' },
    { name: 'Dlive', url: 'https://dlive.tv/{username}', icon: '🎮' },
    { name: 'Trovo', url: 'https://trovo.live/{username}', icon: '🎯' },
    { name: 'Caffeine', url: 'https://caffeine.tv/{username}', icon: '☕' },
    { name: 'Theta.tv', url: 'https://theta.tv/{username}', icon: '📺' },
    { name: 'YouNow', url: 'https://younow.com/{username}', icon: '📱' },
    { name: 'LiveMe', url: 'https://liveme.com/{username}', icon: '🎥' },
    { name: 'Bigo Live', url: 'https://bigo.tv/{username}', icon: '🎬' },
    { name: 'Storyfire', url: 'https://storyfire.com/{username}', icon: '🔥' },
    { name: 'DTube', url: 'https://d.tube/#!/c/{username}', icon: '▶️' },
    { name: 'BitChute', url: 'https://bitchute.com/{username}', icon: '📺' },
    { name: 'LBRY', url: 'https://lbry.tv/@{username}', icon: '📼' },
    { name: 'Odysee', url: 'https://odysee.com/@{username}', icon: '🎥' },
    { name: 'PeerTube', url: 'https://peertube.com/{username}', icon: '📹' },
    { name: 'Rumble', url: 'https://rumble.com/{username}', icon: '📽️' },
    { name: 'Dailymotion', url: 'https://dailymotion.com/{username}', icon: '🎞️' },
    { name: 'Niconico', url: 'https://nicovideo.jp/user/{username}', icon: '🎌' },
    { name: 'AfreecaTV', url: 'https://afreecatv.com/{username}', icon: '🌏' },
    { name: 'VLive', url: 'https://vlive.tv/{username}', icon: '📱' },
    { name: 'Likee', url: 'https://likee.com/@{username}', icon: '📱' },
    { name: 'Kuaishou', url: 'https://kuaishou.com/{username}', icon: '🎬' },
    { name: 'Xiaohongshu', url: 'https://xiaohongshu.com/{username}', icon: '📖' },
    { name: 'Zhihu', url: 'https://zhihu.com/people/{username}', icon: '❓' },
    { name: 'Douban', url: 'https://douban.com/people/{username}', icon: '📚' },
    { name: 'Tieba', url: 'https://tieba.baidu.com/home/{username}', icon: '🏠' },
    { name: 'Xueqiu', url: 'https://xueqiu.com/u/{username}', icon: '📈' },
    { name: 'Maimai', url: 'https://maimai.cn/contact/{username}', icon: '👔' },
    { name: 'Clubhouse', url: 'https://clubhouse.com/@{username}', icon: '🏠' },
    { name: 'Stereo', url: 'https://stereo.com/{username}', icon: '🎙️' },
    { name: 'Spotify Greenroom', url: 'https://spotify.com/greenroom/{username}', icon: '🟢' },
    { name: 'Twitter Spaces', url: 'https://twitter.com/i/spaces/{username}', icon: '🎙️' },
    { name: 'Discord Stage', url: 'https://discord.com/stages/{username}', icon: '🎭' },
    { name: 'Reddit Talk', url: 'https://reddit.com/talk/{username}', icon: '🗣️' },
    { name: 'Slack', url: 'https://slack.com/team/{username}', icon: '💼' },
    { name: 'Microsoft Teams', url: 'https://teams.microsoft.com/{username}', icon: '👥' },
    { name: 'Yammer', url: 'https://yammer.com/{username}', icon: '💬' },
    { name: 'Workplace', url: 'https://workplace.com/{username}', icon: '🏢' },
    { name: 'Asana', url: 'https://asana.com/{username}', icon: '📋' },
    { name: 'Trello', url: 'https://trello.com/{username}', icon: '📌' },
    { name: 'Notion', url: 'https://notion.so/{username}', icon: '📝' },
    { name: 'Evernote', url: 'https://evernote.com/{username}', icon: '🐘' },
    { name: 'OneNote', url: 'https://onenote.com/{username}', icon: '📓' },
    { name: 'Bear', url: 'https://bear.app/{username}', icon: '🐻' },
    { name: 'Obsidian', url: 'https://obsidian.md/{username}', icon: '💎' },
    { name: 'Roam Research', url: 'https://roamresearch.com/{username}', icon: '🧠' },
    { name: 'Logseq', url: 'https://logseq.com/{username}', icon: '📊' },
    { name: 'Dendron', url: 'https://dendron.so/{username}', icon: '🌲' },
    { name: 'Athens Research', url: 'https://athensresearch.org/{username}', icon: '🏛️' },
    { name: 'Zotero', url: 'https://zotero.org/{username}', icon: '📚' },
    { name: 'Mendeley', url: 'https://mendeley.com/{username}', icon: '📖' },
    { name: 'EndNote', url: 'https://endnote.com/{username}', icon: '📑' },
    { name: 'Papers', url: 'https://papers.com/{username}', icon: '📄' },
    { name: 'F6S', url: 'https://f6s.com/{username}', icon: '🚀' },
    { name: 'Startup School', url: 'https://startupschool.org/{username}', icon: '🎓' },
    { name: 'Pioneer', url: 'https://pioneer.app/{username}', icon: '🌟' },
    { name: 'Betalist', url: 'https://betalist.com/{username}', icon: '📋' },
    { name: 'Hacker News', url: 'https://news.ycombinator.com/user?id={username}', icon: '📰' },
    { name: 'Slashdot', url: 'https://slashdot.org/~{username}', icon: '/' },
    { name: 'Lobsters', url: 'https://lobste.rs/u/{username}', icon: '🦞' },
    { name: 'Tildes', url: 'https://tildes.net/user/{username}', icon: '~' },
    { name: 'Lemmy', url: 'https://lemmy.ml/u/{username}', icon: '🐀' },
    { name: 'Raddle', url: 'https://raddle.me/user/{username}', icon: '📡' },
    { name: 'Voat', url: 'https://voat.co/u/{username}', icon: '🗣️' },
    { name: 'Saidit', url: 'https://saidit.net/u/{username}', icon: '💬' },
    { name: 'Ruqqus', url: 'https://ruqqus.com/@{username}', icon: '🗨️' },
    { name: 'Gitter', url: 'https://gitter.im/{username}', icon: '💬' },
    { name: 'Matrix', url: 'https://matrix.to/#/@{username}', icon: '🔲' },
    { name: 'Element', url: 'https://element.io/@{username}', icon: '⚛️' },
    { name: 'Riot', url: 'https://riot.im/{username}', icon: '🎭' },
    { name: 'Signal', url: 'https://signal.me/#/{username}', icon: '📱' },
    { name: 'Session', url: 'https://getsession.org/{username}', icon: '🔒' },
    { name: 'Status', url: 'https://status.im/{username}', icon: '📱' },
    { name: 'Threema', url: 'https://threema.id/{username}', icon: '✉️' },
    { name: 'Wire', url: 'https://wire.com/@{username}', icon: '🔌' },
    { name: 'Dust', url: 'https://usedust.com/{username}', icon: '💨' },
    { name: 'Confide', url: 'https://getconfide.com/{username}', icon: '🤫' },
    { name: 'Wickr', url: 'https://wickr.com/{username}', icon: '🔐' },
    { name: 'Briar', url: 'https://briarproject.org/{username}', icon: '🌿' },
    { name: 'Delta Chat', url: 'https://delta.chat/{username}', icon: '△' },
    { name: 'Jami', url: 'https://jami.net/{username}', icon: '💬' },
    { name: 'Tox', url: 'https://tox.chat/{username}', icon: '☣️' },
    { name: 'XMPP', url: 'https://xmpp.org/{username}', icon: '✉️' },
    { name: 'IRC', url: 'https://irccloud.com/{username}', icon: '💭' },
    { name: 'Mattermost', url: 'https://mattermost.com/{username}', icon: '💬' },
    { name: 'RocketChat', url: 'https://rocket.chat/{username}', icon: '🚀' },
    { name: 'Zulip', url: 'https://zulipchat.com/{username}', icon: '💧' },
    { name: 'Let\'s Chat', url: 'https://sdelements.github.io/lets-chat/{username}', icon: '💬' },
    { name: 'ChatSecure', url: 'https://chatsecure.org/{username}', icon: '🔒' },
    { name: 'Surespot', url: 'https://surespot.me/{username}', icon: '👁️' },
    { name: 'Silence', url: 'https://silence.im/{username}', icon: '🤫' },
    { name: 'Simplex Chat', url: 'https://simplex.chat/{username}', icon: '💬' },
    { name: 'Cwtch', url: 'https://cwtch.im/{username}', icon: '🤗' },
    { name: 'Ricochet', url: 'https://ricochet.im/{username}', icon: '↗️' },
    { name: 'Speek', url: 'https://speek.network/{username}', icon: '🗣️' },
    { name: 'Mumble', url: 'https://mumble.info/{username}', icon: '🎙️' },
    { name: 'TeamSpeak', url: 'https://teamspeak.com/{username}', icon: '🎤' },
    { name: 'Ventrilo', url: 'https://ventrilo.com/{username}', icon: '🎧' },
    { name: 'Guilded', url: 'https://guilded.gg/{username}', icon: '🎮' },
    { name: 'Medium', url: 'https://medium.com/@{username}', icon: '📝' },
    { name: 'DeviantArt', url: 'https://deviantart.com/{username}', icon: '🎨' },
    { name: 'Behance', url: 'https://behance.net/{username}', icon: '🎯' },
    { name: 'Dribbble', url: 'https://dribbble.com/{username}', icon: '🏀' },
    { name: 'Flickr', url: 'https://flickr.com/people/{username}', icon: '📷' },
    { name: 'Vimeo', url: 'https://vimeo.com/{username}', icon: '🎬' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/{username}', icon: '🎵' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/{username}', icon: '🎧' },
    { name: 'Last.fm', url: 'https://last.fm/user/{username}', icon: '🎼' },
    { name: 'Tumblr', url: 'https://{username}.tumblr.com', icon: '📱' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/{username}', icon: '🎲' },
    { name: 'Discord', url: 'https://discord.com/users/{username}', icon: '💬' },
    { name: 'Telegram', url: 'https://t.me/{username}', icon: '📨' },
    { name: 'WhatsApp', url: 'https://wa.me/{username}', icon: '💭' },
    { name: 'Snapchat', url: 'https://snapchat.com/add/{username}', icon: '👻' },
    { name: 'WeChat', url: 'https://wechat.com/{username}', icon: '💬' },
    { name: 'Line', url: 'https://line.me/{username}', icon: '🔵' },
    { name: 'VK', url: 'https://vk.com/{username}', icon: '🌐' },
    { name: 'OK.ru', url: 'https://ok.ru/{username}', icon: '🔸' },
    { name: 'Weibo', url: 'https://weibo.com/{username}', icon: '🌏' },
    { name: 'QQ', url: 'https://qq.com/{username}', icon: '🐧' },
    { name: 'Douyin', url: 'https://douyin.com/{username}', icon: '🎵' },
    { name: 'Bilibili', url: 'https://space.bilibili.com/{username}', icon: '📺' },
    { name: 'Xing', url: 'https://xing.com/profile/{username}', icon: '💼' },
    { name: 'ResearchGate', url: 'https://researchgate.net/profile/{username}', icon: '🔬' },
    { name: 'Academia', url: 'https://academia.edu/{username}', icon: '📚' },
    { name: 'SlideShare', url: 'https://slideshare.net/{username}', icon: '📊' },
    { name: 'Quora', url: 'https://quora.com/profile/{username}', icon: '❓' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/{username}', icon: '💡' },
    { name: 'GitLab', url: 'https://gitlab.com/{username}', icon: '🦊' },
    { name: 'Bitbucket', url: 'https://bitbucket.org/{username}', icon: '📦' },
    { name: 'CodePen', url: 'https://codepen.io/{username}', icon: '🖊️' },
    { name: 'Patreon', url: 'https://patreon.com/{username}', icon: '💝' },
    { name: 'Ko-fi', url: 'https://ko-fi.com/{username}', icon: '☕' },
    { name: 'Buy Me a Coffee', url: 'https://buymeacoffee.com/{username}', icon: '🍵' },
    { name: 'Gumroad', url: 'https://gumroad.com/{username}', icon: '🛍️' },
    { name: 'Etsy', url: 'https://etsy.com/shop/{username}', icon: '🎪' },
    { name: 'Fiverr', url: 'https://fiverr.com/{username}', icon: '💼' },
    { name: 'Upwork', url: 'https://upwork.com/freelancers/{username}', icon: '💻' },
    { name: 'Freelancer', url: 'https://freelancer.com/u/{username}', icon: '🔨' },
    { name: 'AngelList', url: 'https://angel.co/{username}', icon: '👼' },
    { name: 'Crunchbase', url: 'https://crunchbase.com/person/{username}', icon: '📊' },
    { name: 'Product Hunt', url: 'https://producthunt.com/@{username}', icon: '😺' },
    { name: 'Indie Hackers', url: 'https://indiehackers.com/{username}', icon: '💡' },
    { name: 'Mastodon', url: 'https://mastodon.social/@{username}', icon: '🐘' },
    { name: 'Keybase', url: 'https://keybase.io/{username}', icon: '🔑' },
    { name: 'About.me', url: 'https://about.me/{username}', icon: '👤' },
    { name: 'Gravatar', url: 'https://gravatar.com/{username}', icon: '🎭' },
    { name: 'IMDb', url: 'https://imdb.com/name/{username}', icon: '🎬' },
    { name: 'Letterboxd', url: 'https://letterboxd.com/{username}', icon: '🎦' },
    { name: 'Goodreads', url: 'https://goodreads.com/{username}', icon: '📚' },
    { name: 'MyAnimeList', url: 'https://myanimelist.net/profile/{username}', icon: '🎌' },
    { name: 'ArtStation', url: 'https://artstation.com/{username}', icon: '🎨' },
    { name: 'Itch.io', url: 'https://itch.io/profile/{username}', icon: '🎮' },
    { name: 'Bandcamp', url: 'https://{username}.bandcamp.com', icon: '🎸' },
    { name: 'Mixcloud', url: 'https://mixcloud.com/{username}', icon: '🎧' },
    { name: 'Discogs', url: 'https://discogs.com/user/{username}', icon: '💿' },
    { name: 'Strava', url: 'https://strava.com/athletes/{username}', icon: '🚴' },
    { name: 'Untappd', url: 'https://untappd.com/user/{username}', icon: '🍺' },
    { name: 'Foursquare', url: 'https://foursquare.com/{username}', icon: '📍' },
    { name: 'Yelp', url: 'https://yelp.com/user_details?userid={username}', icon: '⭐' },
    { name: 'TripAdvisor', url: 'https://tripadvisor.com/members/{username}', icon: '✈️' },
    { name: 'Airbnb', url: 'https://airbnb.com/users/show/{username}', icon: '🏠' },
    { name: 'Couchsurfing', url: 'https://couchsurfing.com/people/{username}', icon: '🛋️' },
    { name: 'WordPress', url: 'https://{username}.wordpress.com', icon: '📝' },
    { name: 'Blogger', url: 'https://{username}.blogspot.com', icon: '📰' },
    { name: 'Substack', url: 'https://{username}.substack.com', icon: '📧' },
    { name: 'Hashnode', url: 'https://hashnode.com/@{username}', icon: '✍️' },
    { name: 'Dev.to', url: 'https://dev.to/{username}', icon: '👩‍💻' },
    { name: 'Kaggle', url: 'https://kaggle.com/{username}', icon: '📊' },
    { name: 'HackerRank', url: 'https://hackerrank.com/{username}', icon: '💻' },
    { name: 'LeetCode', url: 'https://leetcode.com/{username}', icon: '🔰' },
    { name: 'CodeChef', url: 'https://codechef.com/users/{username}', icon: '👨‍🍳' },
    { name: 'HackerEarth', url: 'https://hackerearth.com/@{username}', icon: '🌍' },
    { name: 'Exercism', url: 'https://exercism.io/profiles/{username}', icon: '💪' },
    { name: 'Replit', url: 'https://replit.com/@{username}', icon: '⚡' },
    { name: 'Codesandbox', url: 'https://codesandbox.io/u/{username}', icon: '📦' },
    { name: 'JSFiddle', url: 'https://jsfiddle.net/user/{username}', icon: '🎻' },
    { name: 'Observable', url: 'https://observablehq.com/@{username}', icon: '📊' },
    { name: 'npm', url: 'https://npmjs.com/~{username}', icon: '📦' },
    { name: 'PyPI', url: 'https://pypi.org/user/{username}', icon: '🐍' },
    { name: 'RubyGems', url: 'https://rubygems.org/profiles/{username}', icon: '💎' },
    { name: 'Docker Hub', url: 'https://hub.docker.com/u/{username}', icon: '🐳' },
    { name: 'Packagist', url: 'https://packagist.org/packages/{username}', icon: '📦' },
    { name: 'Maven Central', url: 'https://mvnrepository.com/artifact/{username}', icon: '☕' },
    { name: 'NuGet', url: 'https://nuget.org/profiles/{username}', icon: '📦' },
    { name: 'Homebrew', url: 'https://brew.sh/author/{username}', icon: '🍺' },
    { name: 'Arch User Repository', url: 'https://aur.archlinux.org/packages/?K={username}', icon: '🏹' },
    { name: 'OpenSea', url: 'https://opensea.io/{username}', icon: '🌊' },
    { name: 'Rarible', url: 'https://rarible.com/{username}', icon: '🎨' },
    { name: 'Foundation', url: 'https://foundation.app/@{username}', icon: '🏛️' },
    { name: 'SuperRare', url: 'https://superrare.com/{username}', icon: '💎' },
    { name: 'Nifty Gateway', url: 'https://niftygateway.com/profile/{username}', icon: '🎁' },
    { name: 'Known Origin', url: 'https://knownorigin.io/gallery/{username}', icon: '🎨' },
    { name: 'Async Art', url: 'https://async.art/u/{username}', icon: '🎨' },
    { name: 'Mintable', url: 'https://mintable.app/{username}', icon: '🌱' },
    { name: 'Binance NFT', url: 'https://binance.com/en/nft/profile/{username}', icon: '🎭' },
    { name: 'Solanart', url: 'https://solanart.io/user/{username}', icon: '☀️' },
    { name: 'Magic Eden', url: 'https://magiceden.io/u/{username}', icon: '✨' },
    { name: 'Objkt', url: 'https://objkt.com/profile/{username}', icon: '🎨' },
    { name: 'Hic et Nunc', url: 'https://hicetnunc.art/{username}', icon: '🎭' },
    { name: 'Tezos Art', url: 'https://tezos.art/{username}', icon: '🎨' },
    { name: 'Kalamint', url: 'https://kalamint.io/user/{username}', icon: '🎨' },
    { name: 'ByteTrade', url: 'https://bytetrade.io/user/{username}', icon: '💱' },
    { name: 'Gitee', url: 'https://gitee.com/{username}', icon: '📂' },
    { name: 'Sourceforge', url: 'https://sourceforge.net/u/{username}', icon: '🔧' },
    { name: 'Launchpad', url: 'https://launchpad.net/~{username}', icon: '🚀' }
];
   async function checkProfile(url) {
            try {
                const response = await fetch(url);
                return response.status === 200;
            } catch (error) {
                return false;
            }
        }

        async function searchProfiles() {
            const username = document.getElementById('username').value.trim();
            if (!username) {
                alert('Please enter a username');
                return;
            }

            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';

            platforms.forEach(platform => {
                const profileUrl = platform.url.replace('{username}', username);
                const card = createPlatformCard(platform, profileUrl);
                resultsContainer.appendChild(card);

                // Simulate checking profile existence
                setTimeout(() => {
                    const status = Math.random() > 0.5; // Simulasi status profil
                    updateCardStatus(card, status);
                }, Math.random() * 2000);
            });
        }

        function createPlatformCard(platform, profileUrl) {
            const card = document.createElement('div');
            card.className = 'platform-card';
            card.innerHTML = `
                <div class="platform-header">
                    <span class="platform-icon">${platform.icon}</span>
                    <span class="platform-name">${platform.name}</span>
                </div>
                <a href="${profileUrl}" target="_blank" class="profile-link">${profileUrl}</a>
                <div class="status">Checking...</div>
            `;
            return card;
        }

        function updateCardStatus(card, exists) {
            const statusDiv = card.querySelector('.status');
            if (exists) {
                statusDiv.textContent = 'Profile Found';
                statusDiv.className = 'status found';
            } else {
                statusDiv.textContent = 'Not Found';
                statusDiv.className = 'status not-found';
            }
        }

        // Animasi loading saat scroll
        window.addEventListener('scroll', () => {
            const cards = document.querySelectorAll('.platform-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });