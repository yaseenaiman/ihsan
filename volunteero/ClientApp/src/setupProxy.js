const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:37971';

const context =  [
    "/api/Auth/Register",
    "/api/employee",
    "/api/ApprovedPost/GetAllPosts",
    "/api/registernormal/CreateUser",
    "/api/ApprovedPost/CreateApproved",
    "/api/Auth/Login",
    "/api/ApprovedPost/GetUserId",
    "/api/ApprovedPost/GetUserImageByApprovedPostId",
    "/api/AdminPanel/CreateRole",
    "/api/AdminPanel/AssignRoleToUser",
   "/api/ApprovedPost/SearchPosts"


];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
