import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function useLoggedIn() {
	const [LoggedIn, setLoggedIn] = useState(false);
	const [UserId, setUserId] = useState(null);
	
	useEffect(() => {
		if (localStorage.jwtToken) {
			const token = localStorage.jwtToken;
	
			const decoded = jwt_decode(token)	
			// Check for expired token
			const currentTime = Date.now() / 1000; // to get in milliseconds
	
			if (decoded.exp < currentTime) {
				localStorage.clear();
				setLoggedIn(false);
				setUserId(null)
				window.location.href = "./login";
			} else {
				setLoggedIn(true);
				setUserId(decoded.id);
			}
		}
	}, [])

  return {loggedIn: LoggedIn, userId: UserId };
}

export default useLoggedIn;
