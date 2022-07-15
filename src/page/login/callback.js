import styled from 'styled-components';
import { useEffect } from 'react';
import {
  SOCIAL_REDIRECT_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '../../constants/SocialLogin';
import axios from 'axios';

const CallBack = () => {
  const SERVER_URL = 'http://localhost:3000/login/social/';

  //   useEffect(() => {
  //     async function callbackHandler() {
  //       const url = new URL(window.location.href);
  //       let req;

  //       req = {
  //         code: await url.searchParams.get('code'),
  //         state: await url.searchParams.get('state'),
  //         redirectUri: await SOCIAL_REDIRECT_URL,
  //       };

  //       if (req) {
  //         // alert(JSON.stringify(req));
  //         console.log(JSON.stringify(req));
  //       }

  //       const authorizationCode = await url.searchParams.get('code');

  //       const url2 = `https://oauth2.googleapis.com/token?code=${authorizationCode}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${SOCIAL_REDIRECT_URL}&grant_type=authorization_code`;
  //       const access_token = await axios
  //         .post(url2, {
  //           headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //         })
  //         .then(el => {
  //           return el.data.access_token;
  //         })
  //         .catch(err => {
  //           console.log('err=', err);
  //         });

  //       if (access_token) {
  //         // alert(access_token);
  //         console.log(access_token);

  //         const googleAPI = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`;
  //         const userInfo = await axios
  //           .get(googleAPI, {
  //             headers: {
  //               authorization: `Bearer ${access_token}`,
  //             },
  //           })
  //           .then(el => {
  //             return el.data;
  //           })
  //           .catch(err => {
  //             console.log('err=', err);
  //           });

  //         if (userInfo) {
  //           //   alert(JSON.stringify(userInfo));
  //           console.log(JSON.stringify(userInfo));
  //           console.log(access_token);
  //         }

  //         const email = userInfo.email;
  //       }

  //       //   const [result, created] = await db.addGoogleUser(email);
  //       //   if (!created) {
  //       //     return res.status(400).json({ message: 'user-already-exists' });
  //       //   }
  //     }

  //     callbackHandler();
  //   }, []);

  async function callbackHandler() {
    const url = new URL(window.location.href);
    let req;

    req = {
      code: await url.searchParams.get('code'),
      state: await url.searchParams.get('state'),
      redirectUri: await SOCIAL_REDIRECT_URL,
    };

    if (req) {
      // alert(JSON.stringify(req));
      console.log(JSON.stringify(req));

      const url2 = `https://oauth2.googleapis.com/token?code=${req.code}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${SOCIAL_REDIRECT_URL}&grant_type=authorization_code`;
      const access_token = await axios
        .post(url2, {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
        .then(el => {
          return el.data.access_token;
        })
        .catch(err => {
          console.log('err=', err);
        });

      if (access_token) {
        // alert(access_token);
        console.log(access_token);

        const googleAPI = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`;
        const userInfo = await axios
          .get(googleAPI, {
            headers: {
              authorization: `Bearer ${access_token}`,
            },
          })
          .then(el => {
            return el.data;
          })
          .catch(err => {
            console.log('err=', err);
          });

        if (userInfo) {
          //   alert(JSON.stringify(userInfo));
          console.log(JSON.stringify(userInfo));
          console.log(access_token);
        }

        const email = userInfo.email;
      }

      //   const [result, created] = await db.addGoogleUser(email);
      //   if (!created) {
      //     return res.status(400).json({ message: 'user-already-exists' });
      //   }

      //   const response = {
      //     id: '104849023681245968800',
      //     email: 'ferodemic1993@gmail.com',
      //     verified_email: true,
      //     picture:
      //       'https://lh3.googleusercontent.com/a-/AFdZucqqfg8gwpiBcquhXsxtGV6fV-6VPdPP13Tt5bFJ_w=s96-c',
      //   };
    }
  }

  callbackHandler();

  return <h1>콜백</h1>;
};

export default CallBack;
