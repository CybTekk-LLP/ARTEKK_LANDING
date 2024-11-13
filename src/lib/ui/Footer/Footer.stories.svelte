<script lang="ts" context="module">
	import { Template, Story } from '@storybook/addon-svelte-csf';
	import { Footer } from '..';

	export const meta = {
		title: 'Components/UI/Footer',
		component: Footer
	};
</script>

<Template let:args>
	<Footer {...args} />
</Template>

<Story
	name="main"
	args={{
		i18n: {
			copyrightLabel: 'copyright © All rights reserved.',
			productLabel: 'is a product of'
		},
		content: {
			appStoreLink: '/',
			googlePlayLink: '/',
			navigationOptions: [
				{
					name: 'Pages',
					subOptions: [
						{ name: 'About', url: '/about' },
						{ name: 'Features', url: '/feature' },
						{ name: 'Pitch', url: '/pitch' },
						{ name: 'Contact', url: '/contact' }
					]
				},
				{
					name: 'Contact',
					subOptions: [
						{
							name: 'CybTEKK, Plot No. 10, Sector 13,Rajiv Gandhi IT Park, Chandigarh',
							url: 'https://maps.app.goo.gl/6PmTzFpYniaMRe3MA'
						},
						{ name: 'socials@cybtekk.com', url: 'mailto:socials@cybtekk.com' },
						{ name: '+919888688244', url: 'tel:+919888688244' }
					]
				}
			],
			bottomOptions: [
				{ name: 'Privacy Policy', url: '/' },
				{ name: 'Terms of Use', url: '/' },
				{ name: 'Legal', url: '/' },
				{ name: 'Site Map', url: '/' }
			]
		}
	}}
/>
