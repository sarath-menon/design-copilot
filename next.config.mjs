import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions`` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
    // Optionally, add any other Next.js config below

    // webpack(config, { isServer, dev }) {
    //     // Use the client static directory in the server bundle and prod mode
    //     // Fixes `Error occurred prerendering page "/"`
    //     config.output.webassemblyModuleFilename =
    //         isServer && !dev
    //             ? "../static/wasm/[modulehash].wasm"
    //             : "static/wasm/[modulehash].wasm";

    //     // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    //     config.experiments = { ...config.experiments, asyncWebAssembly: true };

    //     return config;
    // }
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)