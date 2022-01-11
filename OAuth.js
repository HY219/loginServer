// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음


const CLIENT_ID = "11111111111111111111111111111111";
const REDIRECT_URI =  "http://localhost:3000/oauth";

//export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=78d455dd6b99fc8000f49d4da9ac2b74&redirect_uri=http://localhost:3000/oauth&response_type=code`;

<KaKaoBtn href={KAKAO_AUTH_URL}>
	<img src={kakaologo}></img>
	<span>카카오계정 로그인</span>
</KaKaoBtn>