import Image from "next/image";
import Link from "next/link";
import React from "react";
import ForgotForm from "./ForgotForm";

export const metadata = {
	title: "Forgot Password | Gadget Galaxy",
	description:
		"Reset your password to regain access to your account at Your Store Name. Enter your email to receive password reset instructions.",
};

export default function ForgotPassword() {
	return (
		<section className="h-screen flex items-center justify-center">
			<div className="p-8 border-t-2 border-accent shadow-xl w-full max-w-xl rounded-md">
				<div className="mx-auto w-[150px] h-[150px] mb-10 border shadow rounded">
					<Link href="/">
						<Image
							src="/img/logo.png"
							width={200}
							height={100}
							alt="logo"
							className="h-full w-full object-contain object-center"
						/>
					</Link>
				</div>
				<ForgotForm />
			</div>
		</section>
	);
}
