// export const fn = () => { return {}; };
export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: parseInt(process.env.PORT!) || 30001,
  defaultLimit: parseInt(process.env.DEFAULT_LIMIT!) || 7,
});
