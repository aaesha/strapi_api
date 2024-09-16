// ./src/middlewares/my-custom-middleware.js
module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
      console.log('Custom middleware executed');
      await next();
    };
  };

//   module.exports = async (ctx, next) => {
//     const token = ctx.request.headers['authorization'];
//     if (token) {
//       try {
//         const decoded = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
//         ctx.state.user = await strapi.query('user', 'users-permissions').findOne({ id: decoded.id });
//       } catch (err) {
//         console.error('Error decoding token:', err);
//       }
//     }
//     await next();
//   };


  
  