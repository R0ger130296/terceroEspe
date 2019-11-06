export const environment = {
  production: true,
  URL: 'https://miespemovil.espe.edu.ec/helpdesk',
  URLQuipux:'https://servicios.espe.edu.ec:8443/quipux-0.0.1-SNAPSHOT',
  sso: {
    // Local
    serverUrl: 'https://localhost:9443',
    // clientId: 'zGY8D9AEDSoyisGiEmygvBZp37ga',
    clientId: '8XXsQOAomXj0fXhHwxK_9kTbR88a',
    // Test
    // serverUrl: 'https://ufaslqtestethos.espe.local:8443',
    // clientId: 'zGY8D9AEDSoyisGiEmygvBZp37ga',
    // serverUrl: 'https://srvcas.espe.edu.ec',
    // clientId: '8XXsQOAomXj0fXhHwxK_9kTbR88a',


    issuer: '/oauth2/token',
    redirectUri: window.location.origin,
    postredirectUrL: window.location.origin,
    scope: 'openid profile email',
    logout: '/oidc/logout',
    tokenEndpoint: '/oauth2/token',
    userinfoEndpoint: '/oauth2/userinfo',
    authorizationEndpoint: '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token'
  }
};
