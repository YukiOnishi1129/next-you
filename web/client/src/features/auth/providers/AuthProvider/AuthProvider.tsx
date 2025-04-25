"use client";

import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type User = {
	id: string;
	name: string;
	email: string;
	isGuest: boolean;
};

type AuthContextType = {
	user: User | null;
	isLoading: boolean;
	login: (email: string, password: string) => Promise<void>;
	guestLogin: () => Promise<void>;
	logout: () => Promise<void>;
	register: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	// Check if user is logged in on mount
	useEffect(() => {
		const checkAuth = async () => {
			try {
				// Check for auth cookie
				const authCookie = getCookie("auth");
				const guestCookie = getCookie("guest");

				if (authCookie) {
					// In a real app, you would validate the token with your backend
					// For demo, we'll just parse the cookie
					const userData = JSON.parse(authCookie as string);
					setUser({ ...userData, isGuest: false });
				} else if (guestCookie) {
					// Set guest user
					setUser({
						id: "guest-user",
						name: "Guest User",
						email: "guest@example.com",
						isGuest: true,
					});
				}
			} catch (error) {
				console.error("Auth check failed:", error);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuth();
	}, []);

	const login = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			// In a real app, you would call your API here
			// For demo, we'll just simulate a successful login
			await new Promise((resolve) => setTimeout(resolve, 1000));

			const userData = {
				id: "user-1",
				name: "John Doe",
				email,
				isGuest: false,
			};

			// Set cookie
			setCookie("auth", JSON.stringify(userData), { maxAge: 60 * 60 * 24 * 7 }); // 1 week

			setUser(userData);
			router.push("/dashboard");
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const guestLogin = async () => {
		setIsLoading(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			const guestData = {
				id: "guest-user",
				name: "Guest User",
				email: "guest@example.com",
				isGuest: true,
			};

			// Set guest cookie
			setCookie("guest", "true", { maxAge: 60 * 60 * 24 }); // 1 day

			setUser(guestData);
			router.push("/dashboard");
		} catch (error) {
			console.error("Guest login failed:", error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const logout = async () => {
		setIsLoading(true);
		try {
			// In a real app, you would call your API here
			// For demo, we'll just simulate a successful logout
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Remove cookies
			deleteCookie("auth");
			deleteCookie("guest");

			setUser(null);
			router.push("/");
		} catch (error) {
			console.error("Logout failed:", error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const register = async (name: string, email: string, password: string) => {
		setIsLoading(true);
		try {
			// In a real app, you would call your API here
			// For demo, we'll just simulate a successful registration
			await new Promise((resolve) => setTimeout(resolve, 1500));

			const userData = {
				id: `user-${Date.now()}`,
				name,
				email,
				isGuest: false,
			};

			// Set cookie
			setCookie("auth", JSON.stringify(userData), { maxAge: 60 * 60 * 24 * 7 }); // 1 week

			setUser(userData);
			router.push("/dashboard");
		} catch (error) {
			console.error("Registration failed:", error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{ user, isLoading, login, guestLogin, logout, register }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
