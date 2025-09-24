/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para transpilar el paquete npm
  transpilePackages: ["prueba-npm-nextjs"],

  // Configuración experimental para Next.js 15
  experimental: {
    // Habilitar características de Next.js 15 si las necesitas
    turbo: {
      moduleIdStrategy: "deterministic",
    },
  },

  // Configuración adicional de webpack si es necesaria
  webpack: (config, { isServer }) => {
    // Asegurar que los CSS modules se procesen correctamente
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
