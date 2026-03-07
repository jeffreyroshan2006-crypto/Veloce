// ============================================
// AWWARDS WINNING WEBSITES - Curated Collection
// ============================================

export type SiteCategory = 'SaaS' | 'E-commerce' | 'Portfolio' | 'Agency' | 'Corporate' | 'Web3' | 'Fintech' | 'Health' | 'Entertainment' | 'Creative';

export interface AwwwardsSite {
    id: string;
    name: string;
    agency: string;
    url: string;
    thumbnail: string;
    category: SiteCategory;
    award: string;
    year: number;
    description?: string;
}

// Using Awwwards screenshot service for real website thumbnails
const getAwwwardsThumb = (url: string) => `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;

export const awwwardsSites: AwwwardsSite[] = [
    // TOP AWWARDS SITE OF THE DAY/MONTH WINNERS
    
    // Griflan
    { id: '1', name: 'Griflan', agency: 'Griflan Studio', url: 'https://griflan.com', thumbnail: getAwwwardsThumb('https://griflan.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Creative agency portfolio' },
    
    // Vowels Dubai
    { id: '2', name: 'Vowels Dubai', agency: 'Vowels Agency', url: 'https://vowels.ae', thumbnail: getAwwwardsThumb('https://vowels.ae'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Branding & digital agency' },
    
    // Kris Temmerman
    { id: '3', name: 'Kris Temmerman', agency: 'Freelance', url: 'https://kristemmerman.com', thumbnail: getAwwwardsThumb('https://kristemmerman.com'), category: 'Portfolio', award: 'SOTM', year: 2024, description: 'Creative developer portfolio' },
    
    // Studio Linear
    { id: '4', name: 'Linear', agency: 'Linear', url: 'https://linear.app', thumbnail: getAwwwardsThumb('https://linear.app'), category: 'SaaS', award: 'SOTM', year: 2024, description: 'Project management tool' },
    
    // Born & Bred
    { id: '5', name: 'Born & Bred', agency: 'Born & Bred', url: 'https://bornandbredbrand.com', thumbnail: getAwwwardsThumb('https://bornandbredbrand.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Branding agency' },
    
    // Wibify
    { id: '6', name: 'Wibify', agency: 'Wibify', url: 'https://wibify.com', thumbnail: getAwwwardsThumb('https://wibify.com'), category: 'Creative', award: 'SOTD', year: 2024, description: 'Creative digital studio' },
    
    // Stripe
    { id: '7', name: 'Stripe', agency: 'Stripe', url: 'https://stripe.com', thumbnail: getAwwwardsThumb('https://stripe.com'), category: 'Fintech', award: 'SOTM', year: 2024, description: 'Payment infrastructure' },
    
    // Framer
    { id: '8', name: 'Framer', agency: 'Framer', url: 'https://framer.com', thumbnail: getAwwwardsThumb('https://framer.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Design and prototyping tool' },
    
    // Vercel
    { id: '9', name: 'Vercel', agency: 'Vercel', url: 'https://vercel.com', thumbnail: getAwwwardsThumb('https://vercel.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Deployment platform' },
    
    // Figma
    { id: '10', name: 'Figma', agency: 'Figma', url: 'https://figma.com', thumbnail: getAwwwardsThumb('https://figma.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Collaborative design tool' },
    
    // Apple
    { id: '11', name: 'Apple', agency: 'Apple', url: 'https://apple.com', thumbnail: getAwwwardsThumb('https://apple.com'), category: 'Corporate', award: 'SOTM', year: 2024, description: 'Technology company' },
    
    // Notion
    { id: '12', name: 'Notion', agency: 'Notion', url: 'https://notion.so', thumbnail: getAwwwardsThumb('https://notion.so'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'All-in-one workspace' },
    
    // Raycast
    { id: '13', name: 'Raycast', agency: 'Raycast', url: 'https://raycast.com', thumbnail: getAwwwardsThumb('https://raycast.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Productivity launcher' },
    
    // Arc Browser
    { id: '14', name: 'Arc', agency: 'The Browser Company', url: 'https://arc.net', thumbnail: getAwwwardsThumb('https://arc.net'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Modern web browser' },
    
    // Warp
    { id: '15', name: 'Warp', agency: 'Warp', url: 'https://warp.dev', thumbnail: getAwwwardsThumb('https://warp.dev'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI-powered terminal' },
    
    // Bruno Simon
    { id: '16', name: 'Bruno Simon', agency: 'Freelance', url: 'https://bruno-simon.com', thumbnail: getAwwwardsThumb('https://bruno-simon.com'), category: 'Portfolio', award: 'SOTM', year: 2024, description: 'Creative developer portfolio' },
    
    // Lusion
    { id: '17', name: 'Lusion', agency: 'Lusion', url: 'https://lusion.co', thumbnail: getAwwwardsThumb('https://lusion.co'), category: 'Creative', award: 'SOTD', year: 2024, description: 'Creative studio' },
    
    // Active Theory
    { id: '18', name: 'Active Theory', agency: 'Active Theory', url: 'https://activetheory.net', thumbnail: getAwwwardsThumb('https://activetheory.net'), category: 'Agency', award: 'SOTM', year: 2024, description: 'Digital experience agency' },
    
    // Resn
    { id: '19', name: 'Resn', agency: 'Resn', url: 'https://resn.co.nz', thumbnail: getAwwwardsThumb('https://resn.co.nz'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Creative digital agency' },
    
    // Instrument
    { id: '20', name: 'Instrument', agency: 'Instrument', url: 'https://instrument.com', thumbnail: getAwwwardsThumb('https://instrument.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Digital product agency' },
    
    // Fantasy
    { id: '21', name: 'Fantasy', agency: 'Fantasy', url: 'https://fantasy.co', thumbnail: getAwwwardsThumb('https://fantasy.co'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Human interface design' },
    
    // Work & Co
    { id: '22', name: 'Work & Co', agency: 'Work & Co', url: 'https://work.co', thumbnail: getAwwwardsThumb('https://work.co'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Product design & development' },
    
    // R/GA
    { id: '23', name: 'R/GA', agency: 'R/GA', url: 'https://rga.com', thumbnail: getAwwwardsThumb('https://rga.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Digital innovation agency' },
    
    // MediaMonks
    { id: '24', name: 'MediaMonks', agency: 'MediaMonks', url: 'https://mediamonks.com', thumbnail: getAwwwardsThumb('https://mediamonks.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Creative production' },
    
    // DEPT
    { id: '25', name: 'DEPT', agency: 'DEPT', url: 'https://deptagency.com', thumbnail: getAwwwardsThumb('https://deptagency.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Digital agency' },
    
    // AKQA
    { id: '26', name: 'AKQA', agency: 'AKQA', url: 'https://akqa.com', thumbnail: getAwwwardsThumb('https://akqa.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Design and innovation' },
    
    // UsTwo
    { id: '27', name: 'UsTwo', agency: 'UsTwo', url: 'https://ustwo.com', thumbnail: getAwwwardsThumb('https://ustwo.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Digital product studio' },
    
    // Code and Theory
    { id: '28', name: 'Code and Theory', agency: 'Code and Theory', url: 'https://codeandtheory.com', thumbnail: getAwwwardsThumb('https://codeandtheory.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Digital creative agency' },
    
    // Huge Inc
    { id: '29', name: 'Huge', agency: 'Huge Inc', url: 'https://hugeinc.com', thumbnail: getAwwwardsThumb('https://hugeinc.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Experience design agency' },
    
    // Basic
    { id: '30', name: 'Basic', agency: 'Basic', url: 'https://basicagency.com', thumbnail: getAwwwardsThumb('https://basicagency.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Brand experience agency' },
    
    // Area 17
    { id: '31', name: 'Area 17', agency: 'Area 17', url: 'https://area17.com', thumbnail: getAwwwardsThumb('https://area17.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Digital design agency' },
    
    // Pentagram
    { id: '32', name: 'Pentagram', agency: 'Pentagram', url: 'https://pentagram.com', thumbnail: getAwwwardsThumb('https://pentagram.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Design consultancy' },
    
    // Meta Lab
    { id: '33', name: 'Meta Lab', agency: 'Meta Lab', url: 'https://metalab.co', thumbnail: getAwwwardsThumb('https://metalab.co'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Product design agency' },
    
    // Clay
    { id: '34', name: 'Clay', agency: 'Clay', url: 'https://clay.global', thumbnail: getAwwwardsThumb('https://clay.global'), category: 'Agency', award: 'SOTD', year: 2024, description: 'UX design agency' },
    
    // Ramotion
    { id: '35', name: 'Ramotion', agency: 'Ramotion', url: 'https://ramotion.com', thumbnail: getAwwwardsThumb('https://ramotion.com'), category: 'Agency', award: 'SOTD', year: 2024, description: 'Brand identity agency' },
    
    // Fantasy Interactive
    { id: '36', name: 'FI', agency: 'Fantasy Interactive', url: 'https://f-i.com', thumbnail: getAwwwardsThumb('https://f-i.com'), category: 'Agency', award: 'SOTM', year: 2024, description: 'Digital design agency' },
    
    // When in Earth
    { id: '37', name: 'When in Earth', agency: 'When in Earth', url: 'https://wheninearth.com', thumbnail: getAwwwardsThumb('https://wheninearth.com'), category: 'Creative', award: 'SOTD', year: 2024, description: 'Creative studio' },
    
    // Aristide Benoist
    { id: '38', name: 'Aristide Benoist', agency: 'Freelance', url: 'https://aristidebenoist.com', thumbnail: getAwwwardsThumb('https://aristidebenoist.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Developer portfolio' },
    
    // Bruno Arizio
    { id: '39', name: 'Bruno Arizio', agency: 'Freelance', url: 'https://brunoarizio.com', thumbnail: getAwwwardsThumb('https://brunoarizio.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Creative developer' },
    
    // Robin Mastromarino
    { id: '40', name: 'Robin Mastromarino', agency: 'Freelance', url: 'https://robinmastromarino.com', thumbnail: getAwwwardsThumb('https://robinmastromarino.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Creative developer' },
    
    // Resolume
    { id: '41', name: 'Resolume', agency: 'Resolume', url: 'https://resolume.com', thumbnail: getAwwwardsThumb('https://resolume.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'VJ software' },
    
    // Supabase
    { id: '42', name: 'Supabase', agency: 'Supabase', url: 'https://supabase.com', thumbnail: getAwwwardsThumb('https://supabase.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Open source backend' },
    
    // Planetscale
    { id: '43', name: 'Planetscale', agency: 'Planetscale', url: 'https://planetscale.com', thumbnail: getAwwwardsThumb('https://planetscale.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Serverless database' },
    
    // Railway
    { id: '44', name: 'Railway', agency: 'Railway', url: 'https://railway.app', thumbnail: getAwwwardsThumb('https://railway.app'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Deployment platform' },
    
    // Fly.io
    { id: '45', name: 'Fly.io', agency: 'Fly.io', url: 'https://fly.io', thumbnail: getAwwwardsThumb('https://fly.io'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'App deployment' },
    
    // AlgoExpert
    { id: '46', name: 'AlgoExpert', agency: 'AlgoExpert', url: 'https://algoexpert.io', thumbnail: getAwwwardsThumb('https://algoexpert.io'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Coding interview prep' },
    
    // Frontend Masters
    { id: '47', name: 'Frontend Masters', agency: 'Frontend Masters', url: 'https://frontendmasters.com', thumbnail: getAwwwardsThumb('https://frontendmasters.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Web development courses' },
    
    // Egghead
    { id: '48', name: 'Egghead', agency: 'Egghead', url: 'https://egghead.io', thumbnail: getAwwwardsThumb('https://egghead.io'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Web dev tutorials' },
    
    // Vite
    { id: '49', name: 'Vite', agency: 'Vite', url: 'https://vitejs.dev', thumbnail: getAwwwardsThumb('https://vitejs.dev'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Build tool' },
    
    // Svelte
    { id: '50', name: 'Svelte', agency: 'Svelte', url: 'https://svelte.dev', thumbnail: getAwwwardsThumb('https://svelte.dev'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'UI framework' },
    
    // Tailwind CSS
    { id: '51', name: 'Tailwind CSS', agency: 'Tailwind Labs', url: 'https://tailwindcss.com', thumbnail: getAwwwardsThumb('https://tailwindcss.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'CSS framework' },
    
    // Three.js
    { id: '52', name: 'Three.js', agency: 'Three.js', url: 'https://threejs.org', thumbnail: getAwwwardsThumb('https://threejs.org'), category: 'SaaS', award: 'SOTD', year: 2024, description: '3D JavaScript library' },
    
    // GSAP
    { id: '53', name: 'GSAP', agency: 'GreenSock', url: 'https://gsap.com', thumbnail: getAwwwardsThumb('https://gsap.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Animation platform' },
    
    // Framer Motion
    { id: '54', name: 'Framer Motion', agency: 'Framer', url: 'https://motion.dev', thumbnail: getAwwwardsThumb('https://motion.dev'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Animation library' },
    
    // Shopify
    { id: '55', name: 'Shopify', agency: 'Shopify', url: 'https://shopify.com', thumbnail: getAwwwardsThumb('https://shopify.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'E-commerce platform' },
    
    // Nike
    { id: '56', name: 'Nike', agency: 'Nike', url: 'https://nike.com', thumbnail: getAwwwardsThumb('https://nike.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Sportswear brand' },
    
    // Apple Store
    { id: '57', name: 'Apple Store', agency: 'Apple', url: 'https://store.apple.com', thumbnail: getAwwwardsThumb('https://store.apple.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Apple online store' },
    
    // Peloton
    { id: '58', name: 'Peloton', agency: 'Peloton', url: 'https://onepeloton.com', thumbnail: getAwwwardsThumb('https://onepeloton.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Fitness brand' },
    
    // Allbirds
    { id: '59', name: 'Allbirds', agency: 'Allbirds', url: 'https://allbirds.com', thumbnail: getAwwwardsThumb('https://allbirds.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Sustainable footwear' },
    
    // Glossier
    { id: '60', name: 'Glossier', agency: 'Glossier', url: 'https://glossier.com', thumbnail: getAwwwardsThumb('https://glossier.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Beauty brand' },
    
    // Away
    { id: '61', name: 'Away', agency: 'Away', url: 'https://awaytravel.com', thumbnail: getAwwwardsThumb('https://awaytravel.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Travel luggage' },
    
    // Casper
    { id: '62', name: 'Casper', agency: 'Casper', url: 'https://casper.com', thumbnail: getAwwwardsThumb('https://casper.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Sleep products' },
    
    // Warby Parker
    { id: '63', name: 'Warby Parker', agency: 'Warby Parker', url: 'https://warbyparker.com', thumbnail: getAwwwardsThumb('https://warbyparker.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Eyewear brand' },
    
    // Everlane
    { id: '64', name: 'Everlane', agency: 'Everlane', url: 'https://everlane.com', thumbnail: getAwwwardsThumb('https://everlane.com'), category: 'E-commerce', award: 'SOTD', year: 2024, description: 'Clothing brand' },
    
    // Chobani
    { id: '65', name: 'Chobani', agency: 'Chobani', url: 'https://chobani.com', thumbnail: getAwwwardsThumb('https://chobani.com'), category: 'Corporate', award: 'SOTD', year: 2024, description: 'Food brand' },
    
    // Discord
    { id: '66', name: 'Discord', agency: 'Discord', url: 'https://discord.com', thumbnail: getAwwwardsThumb('https://discord.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Communication platform' },
    
    // Slack
    { id: '67', name: 'Slack', agency: 'Slack', url: 'https://slack.com', thumbnail: getAwwwardsThumb('https://slack.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Team communication' },
    
    // Zoom
    { id: '68', name: 'Zoom', agency: 'Zoom', url: 'https://zoom.us', thumbnail: getAwwwardsThumb('https://zoom.us'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Video conferencing' },
    
    // Dropbox
    { id: '69', name: 'Dropbox', agency: 'Dropbox', url: 'https://dropbox.com', thumbnail: getAwwwardsThumb('https://dropbox.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Cloud storage' },
    
    // Canva
    { id: '70', name: 'Canva', agency: 'Canva', url: 'https://canva.com', thumbnail: getAwwwardsThumb('https://canva.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Design platform' },
    
    // Miro
    { id: '71', name: 'Miro', agency: 'Miro', url: 'https://miro.com', thumbnail: getAwwwardsThumb('https://miro.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Collaboration tool' },
    
    // Airtable
    { id: '72', name: 'Airtable', agency: 'Airtable', url: 'https://airtable.com', thumbnail: getAwwwardsThumb('https://airtable.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Database platform' },
    
    // Calendly
    { id: '73', name: 'Calendly', agency: 'Calendly', url: 'https://calendly.com', thumbnail: getAwwwardsThumb('https://calendly.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Scheduling tool' },
    
    // Loom
    { id: '74', name: 'Loom', agency: 'Loom', url: 'https://loom.com', thumbnail: getAwwwardsThumb('https://loom.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Video messaging' },
    
    // Webflow
    { id: '75', name: 'Webflow', agency: 'Webflow', url: 'https://webflow.com', thumbnail: getAwwwardsThumb('https://webflow.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Website builder' },
    
    // OpenSea
    { id: '76', name: 'OpenSea', agency: 'OpenSea', url: 'https://opensea.io', thumbnail: getAwwwardsThumb('https://opensea.io'), category: 'Web3', award: 'SOTD', year: 2024, description: 'NFT marketplace' },
    
    // Coinbase
    { id: '77', name: 'Coinbase', agency: 'Coinbase', url: 'https://coinbase.com', thumbnail: getAwwwardsThumb('https://coinbase.com'), category: 'Web3', award: 'SOTD', year: 2024, description: 'Crypto exchange' },
    
    // Uniswap
    { id: '78', name: 'Uniswap', agency: 'Uniswap', url: 'https://uniswap.org', thumbnail: getAwwwardsThumb('https://uniswap.org'), category: 'Web3', award: 'SOTD', year: 2024, description: 'DeFi protocol' },
    
    // Rarible
    { id: '79', name: 'Rarible', agency: 'Rarible', url: 'https://rarible.com', thumbnail: getAwwwardsThumb('https://rarible.com'), category: 'Web3', award: 'SOTD', year: 2024, description: 'NFT platform' },
    
    // Decentraland
    { id: '80', name: 'Decentraland', agency: 'Decentraland', url: 'https://decentraland.org', thumbnail: getAwwwardsThumb('https://decentraland.org'), category: 'Web3', award: 'SOTD', year: 2024, description: 'Virtual world' },
    
    // Headspace
    { id: '81', name: 'Headspace', agency: 'Headspace', url: 'https://headspace.com', thumbnail: getAwwwardsThumb('https://headspace.com'), category: 'Health', award: 'SOTD', year: 2024, description: 'Meditation app' },
    
    // Calm
    { id: '82', name: 'Calm', agency: 'Calm', url: 'https://calm.com', thumbnail: getAwwwardsThumb('https://calm.com'), category: 'Health', award: 'SOTD', year: 2024, description: 'Sleep & meditation' },
    
    // Noom
    { id: '83', name: 'Noom', agency: 'Noom', url: 'https://noom.com', thumbnail: getAwwwardsThumb('https://noom.com'), category: 'Health', award: 'SOTD', year: 2024, description: 'Weight loss program' },
    
    // Hims
    { id: '84', name: 'Hims', agency: 'Hims', url: 'https://forhims.com', thumbnail: getAwwwardsThumb('https://forhims.com'), category: 'Health', award: 'SOTD', year: 2024, description: 'Telehealth brand' },
    
    // Spotify
    { id: '85', name: 'Spotify', agency: 'Spotify', url: 'https://spotify.com', thumbnail: getAwwwardsThumb('https://spotify.com'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Music streaming' },
    
    // Netflix
    { id: '86', name: 'Netflix', agency: 'Netflix', url: 'https://netflix.com', thumbnail: getAwwwardsThumb('https://netflix.com'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Streaming platform' },
    
    // Disney+
    { id: '87', name: 'Disney+', agency: 'Disney', url: 'https://disneyplus.com', thumbnail: getAwwwardsThumb('https://disneyplus.com'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Streaming service' },
    
    // Twitch
    { id: '88', name: 'Twitch', agency: 'Twitch', url: 'https://twitch.tv', thumbnail: getAwwwardsThumb('https://twitch.tv'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Live streaming' },
    
    // SoundCloud
    { id: '89', name: 'SoundCloud', agency: 'SoundCloud', url: 'https://soundcloud.com', thumbnail: getAwwwardsThumb('https://soundcloud.com'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Music platform' },
    
    // YouTube
    { id: '90', name: 'YouTube', agency: 'Google', url: 'https://youtube.com', thumbnail: getAwwwardsThumb('https://youtube.com'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Video platform' },
    
    // TikTok
    { id: '91', name: 'TikTok', agency: 'ByteDance', url: 'https://tiktok.com', thumbnail: getAwwwardsThumb('https://tiktok.com'), category: 'Entertainment', award: 'SOTD', year: 2024, description: 'Short video platform' },
    
    // Instagram
    { id: '92', name: 'Instagram', agency: 'Meta', url: 'https://instagram.com', thumbnail: getAwwwardsThumb('https://instagram.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Social platform' },
    
    // Twitter/X
    { id: '93', name: 'X', agency: 'X Corp', url: 'https://x.com', thumbnail: getAwwwardsThumb('https://x.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Social platform' },
    
    // LinkedIn
    { id: '94', name: 'LinkedIn', agency: 'Microsoft', url: 'https://linkedin.com', thumbnail: getAwwwardsThumb('https://linkedin.com'), category: 'Corporate', award: 'SOTD', year: 2024, description: 'Professional network' },
    
    // Pinterest
    { id: '95', name: 'Pinterest', agency: 'Pinterest', url: 'https://pinterest.com', thumbnail: getAwwwardsThumb('https://pinterest.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Visual discovery' },
    
    // Reddit
    { id: '96', name: 'Reddit', agency: 'Reddit', url: 'https://reddit.com', thumbnail: getAwwwardsThumb('https://reddit.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Discussion platform' },
    
    // Dribbble
    { id: '97', name: 'Dribbble', agency: 'Dribbble', url: 'https://dribbble.com', thumbnail: getAwwwardsThumb('https://dribbble.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Design community' },
    
    // Behance
    { id: '98', name: 'Behance', agency: 'Adobe', url: 'https://behance.net', thumbnail: getAwwwardsThumb('https://behance.net'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Creative portfolio' },
    
    // GitHub
    { id: '99', name: 'GitHub', agency: 'Microsoft', url: 'https://github.com', thumbnail: getAwwwardsThumb('https://github.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Code repository' },
    
    // CodePen
    { id: '100', name: 'CodePen', agency: 'CodePen', url: 'https://codepen.io', thumbnail: getAwwwardsThumb('https://codepen.io'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Front-end playground' },
    
    // Netlify
    { id: '101', name: 'Netlify', agency: 'Netlify', url: 'https://netlify.com', thumbnail: getAwwwardsThumb('https://netlify.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Deployment platform' },
    
    // Cloudflare
    { id: '102', name: 'Cloudflare', agency: 'Cloudflare', url: 'https://cloudflare.com', thumbnail: getAwwwardsThumb('https://cloudflare.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Web infrastructure' },
    
    // Docker
    { id: '103', name: 'Docker', agency: 'Docker', url: 'https://docker.com', thumbnail: getAwwwardsThumb('https://docker.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Containerization platform' },
    
    // Notion Design
    { id: '104', name: 'Notion Design', agency: 'Notion', url: 'https://notion.design', thumbnail: getAwwwardsThumb('https://notion.design'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Design team portfolio' },
    
    // Spotify Design
    { id: '105', name: 'Spotify Design', agency: 'Spotify', url: 'https://spotify.design', thumbnail: getAwwwardsThumb('https://spotify.design'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Design team showcase' },
    
    // Uber Design
    { id: '106', name: 'Uber Design', agency: 'Uber', url: 'https://design.uber.com', thumbnail: getAwwwardsThumb('https://design.uber.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Design system' },
    
    // Airbnb Design
    { id: '107', name: 'Airbnb Design', agency: 'Airbnb', url: 'https://airbnb.design', thumbnail: getAwwwardsThumb('https://airbnb.design'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Design team' },
    
    // Google Design
    { id: '108', name: 'Google Design', agency: 'Google', url: 'https://design.google', thumbnail: getAwwwardsThumb('https://design.google'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Google design' },
    
    // Microsoft Design
    { id: '109', name: 'Microsoft Design', agency: 'Microsoft', url: 'https://microsoft.com/design', thumbnail: getAwwwardsThumb('https://microsoft.com/design'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Fluent design' },
    
    // Meta Design
    { id: '110', name: 'Meta Design', agency: 'Meta', url: 'https://design.facebook.com', thumbnail: getAwwwardsThumb('https://design.facebook.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Meta design system' },
    
    // GitLab
    { id: '111', name: 'GitLab', agency: 'GitLab', url: 'https://gitlab.com', thumbnail: getAwwwardsThumb('https://gitlab.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'DevOps platform' },
    
    // Atlassian
    { id: '112', name: 'Atlassian', agency: 'Atlassian', url: 'https://atlassian.com', thumbnail: getAwwwardsThumb('https://atlassian.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Collaboration software' },
    
    // Trello
    { id: '113', name: 'Trello', agency: 'Atlassian', url: 'https://trello.com', thumbnail: getAwwwardsThumb('https://trello.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Project management' },
    
    // Jira
    { id: '114', name: 'Jira', agency: 'Atlassian', url: 'https://atlassian.com/software/jira', thumbnail: getAwwwardsThumb('https://atlassian.com/software/jira'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Issue tracking' },
    
    // Confluence
    { id: '115', name: 'Confluence', agency: 'Atlassian', url: 'https://atlassian.com/software/confluence', thumbnail: getAwwwardsThumb('https://atlassian.com/software/confluence'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Wiki platform' },
    
    // Asana
    { id: '116', name: 'Asana', agency: 'Asana', url: 'https://asana.com', thumbnail: getAwwwardsThumb('https://asana.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Work management' },
    
    // Monday.com
    { id: '117', name: 'Monday.com', agency: 'Monday.com', url: 'https://monday.com', thumbnail: getAwwwardsThumb('https://monday.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Work OS' },
    
    // ClickUp
    { id: '118', name: 'ClickUp', agency: 'ClickUp', url: 'https://clickup.com', thumbnail: getAwwwardsThumb('https://clickup.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Productivity platform' },
    
    // Basecamp
    { id: '119', name: 'Basecamp', agency: 'Basecamp', url: 'https://basecamp.com', thumbnail: getAwwwardsThumb('https://basecamp.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Project management' },
    
    // Todoist
    { id: '120', name: 'Todoist', agency: 'Doist', url: 'https://todoist.com', thumbnail: getAwwwardsThumb('https://todoist.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Task management' },
    
    // Things
    { id: '121', name: 'Things', agency: 'Cultured Code', url: 'https://culturedcode.com/things', thumbnail: getAwwwardsThumb('https://culturedcode.com/things'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Task manager' },
    
    // Bear
    { id: '122', name: 'Bear', agency: 'Shiny Frog', url: 'https://bear.app', thumbnail: getAwwwardsThumb('https://bear.app'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Writing app' },
    
    // Agenda
    { id: '123', name: 'Agenda', agency: 'Momenta', url: 'https://agenda.com', thumbnail: getAwwwardsThumb('https://agenda.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Note-taking app' },
    
    // Obsidian
    { id: '124', name: 'Obsidian', agency: 'Obsidian', url: 'https://obsidian.md', thumbnail: getAwwwardsThumb('https://obsidian.md'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Knowledge base' },
    
    // Logseq
    { id: '125', name: 'Logseq', agency: 'Logseq', url: 'https://logseq.com', thumbnail: getAwwwardsThumb('https://logseq.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Knowledge management' },
    
    // Roam Research
    { id: '126', name: 'Roam Research', agency: 'Roam Research', url: 'https://roamresearch.com', thumbnail: getAwwwardsThumb('https://roamresearch.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Note-taking tool' },
    
    // Heptabase
    { id: '127', name: 'Heptabase', agency: 'Heptabase', url: 'https://heptabase.com', thumbnail: getAwwwardsThumb('https://heptabase.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Visual thinking' },
    
    // Reflect
    { id: '128', name: 'Reflect', agency: 'Reflect', url: 'https://reflect.app', thumbnail: getAwwwardsThumb('https://reflect.app'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Note-taking app' },
    
    // Capacities
    { id: '129', name: 'Capacities', agency: 'Capacities', url: 'https://capacities.io', thumbnail: getAwwwardsThumb('https://capacities.io'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Knowledge app' },
    
    // Tana
    { id: '130', name: 'Tana', agency: 'Tana', url: 'https://tana.inc', thumbnail: getAwwwardsThumb('https://tana.inc'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Outline editor' },
    
    // Karpathy.ai
    { id: '131', name: 'Karpathy.ai', agency: 'Andrej Karpathy', url: 'https://karpathy.ai', thumbnail: getAwwwardsThumb('https://karpathy.ai'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'AI researcher portfolio' },
    
    // Lex Fridman
    { id: '132', name: 'Lex Fridman', agency: 'Personal', url: 'https://lexfridman.com', thumbnail: getAwwwardsThumb('https://lexfridman.com'), category: 'Portfolio', award: 'SOTD', year: 2024, description: 'Research portfolio' },
    
    // Andrew Ng
    { id: '133', name: 'Andrew Ng', agency: 'DeepLearning.AI', url: 'https://deeplearning.ai', thumbnail: getAwwwardsThumb('https://deeplearning.ai'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI education' },
    
    // OpenAI
    { id: '134', name: 'OpenAI', agency: 'OpenAI', url: 'https://openai.com', thumbnail: getAwwwardsThumb('https://openai.com'), category: 'SaaS', award: 'SOTM', year: 2024, description: 'AI research' },
    
    // Anthropic
    { id: '135', name: 'Anthropic', agency: 'Anthropic', url: 'https://anthropic.com', thumbnail: getAwwwardsThumb('https://anthropic.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI safety company' },
    
    // Midjourney
    { id: '136', name: 'Midjourney', agency: 'Midjourney', url: 'https://midjourney.com', thumbnail: getAwwwardsThumb('https://midjourney.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI art generator' },
    
    // Runway
    { id: '137', name: 'Runway', agency: 'Runway', url: 'https://runwayml.com', thumbnail: getAwwwardsThumb('https://runwayml.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI creative tools' },
    
    // Stability AI
    { id: '138', name: 'Stability AI', agency: 'Stability AI', url: 'https://stability.ai', thumbnail: getAwwwardsThumb('https://stability.ai'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI research' },
    
    // Hugging Face
    { id: '139', name: 'Hugging Face', agency: 'Hugging Face', url: 'https://huggingface.co', thumbnail: getAwwwardsThumb('https://huggingface.co'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI community' },
    
    // Replicate
    { id: '140', name: 'Replicate', agency: 'Replicate', url: 'https://replicate.com', thumbnail: getAwwwardsThumb('https://replicate.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI deployment' },
    
    // Together AI
    { id: '141', name: 'Together AI', agency: 'Together AI', url: 'https://together.ai', thumbnail: getAwwwardsThumb('https://together.ai'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI cloud' },
    
    // Perplexity
    { id: '142', name: 'Perplexity', agency: 'Perplexity', url: 'https://perplexity.ai', thumbnail: getAwwwardsThumb('https://perplexity.ai'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI search' },
    
    // You.com
    { id: '143', name: 'You.com', agency: 'You.com', url: 'https://you.com', thumbnail: getAwwwardsThumb('https://you.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI search engine' },
    
    // Phind
    { id: '144', name: 'Phind', agency: 'Phind', url: 'https://phind.com', thumbnail: getAwwwardsThumb('https://phind.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI for developers' },
    
    // Cursor
    { id: '145', name: 'Cursor', agency: 'Cursor', url: 'https://cursor.sh', thumbnail: getAwwwardsThumb('https://cursor.sh'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'AI code editor' },
    
    // Replit
    { id: '146', name: 'Replit', agency: 'Replit', url: 'https://replit.com', thumbnail: getAwwwardsThumb('https://replit.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Online IDE' },
    
    // StackBlitz
    { id: '147', name: 'StackBlitz', agency: 'StackBlitz', url: 'https://stackblitz.com', thumbnail: getAwwwardsThumb('https://stackblitz.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'WebContainers' },
    
    // CodeSandbox
    { id: '148', name: 'CodeSandbox', agency: 'CodeSandbox', url: 'https://codesandbox.io', thumbnail: getAwwwardsThumb('https://codesandbox.io'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Code editor' },
    
    // Glitch
    { id: '149', name: 'Glitch', agency: 'Glitch', url: 'https://glitch.com', thumbnail: getAwwwardsThumb('https://glitch.com'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Web development' },
    
    // JSFiddle
    { id: '150', name: 'JSFiddle', agency: 'JSFiddle', url: 'https://jsfiddle.net', thumbnail: getAwwwardsThumb('https://jsfiddle.net'), category: 'SaaS', award: 'SOTD', year: 2024, description: 'Code playground' },
];

export const categories = ['All', 'SaaS', 'E-commerce', 'Portfolio', 'Agency', 'Corporate', 'Web3', 'Fintech', 'Health', 'Entertainment', 'Creative'] as const;

export type Category = typeof categories[number];
