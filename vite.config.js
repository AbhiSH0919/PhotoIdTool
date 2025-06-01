import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "src/main/dev_abhi/assets"),
			"@shared": path.resolve(__dirname, "src/main/dev_abhi/shared"),
			"@app": path.resolve(__dirname, "src/main/dev_abhi/app"),
			"@components": path.resolve(__dirname, "src/main/dev_abhi/components"),
		},
	},
});
