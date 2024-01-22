"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import "@/app/globals.css";

const Login = () => {
	return (
		<>
			<Navbar />
			<main className="flex-grow bg-white max-md:h-[calc(100vh-123px)] h-[calc(100vh-72px)]">
				<LoginForm />
			</main>
			<Footer />
		</>
	);
};

export default Login;
