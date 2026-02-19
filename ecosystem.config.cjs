/**
 * PM2 ecosystem file for SmartPres.
 *
 * Build first:  npm run build
 * Start:       pm2 start ecosystem.config.cjs
 * Reload:      pm2 reload ecosystem.config.cjs
 * Stop:        pm2 stop smartpres
 * Logs:        pm2 logs smartpres
 */

module.exports = {
  apps: [
    {
      name: "smartpres",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
