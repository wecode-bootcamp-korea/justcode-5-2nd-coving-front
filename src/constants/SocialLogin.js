// SOCIAL
// 배포 프로덕션용 소셜로그인 콜백 URL
// export const SOCIAL_REDIRECT_URL = `https://coving.com/login/social/callback`;
// 배포 개발용 소셜로그인 콜백 URL
export const SOCIAL_REDIRECT_URL = `http://localhost:3000/login/callback`;
// export const SOCIAL_REDIRECT_URL = `http://192.168.0.105:3000/login/social/callback`;

// KAKAO
// export const KAKAO_CLIENT_ID = '1d2d82ced0710bcd5002273de18140b5';
// export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`;

// GOOGLE
export const GOOGLE_CLIENT_ID =
  '836288151108-l2hfh9sct97jhtastmnkahhmi8edb5gm.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = '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';
export const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=google&scope=email`;

// NAVER
export const NAVER_CLIENT_ID = 'VNO_4rFEz_5MAvl3Wn4N';
export const NAVER_CLIENT_SECRET = 'T1huvSJ01t';
export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&state=naver&redirect_uri=${SOCIAL_REDIRECT_URL}`;
