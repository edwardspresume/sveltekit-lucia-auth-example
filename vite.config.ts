import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
// import { apiCodegen } from 'vite-plugin-sveltekit-api-generator';

// , apiCodegen()
export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), kitRoutes()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
