export interface Permission {
	id: number;
	key: string;
	name: string;
}

export interface Role {
	id: number;
	name: string;
	description: string;
	permissions: {
		users: Permission[];
		tabs: Permission[];
		roles: Permission[];
	};
}

export interface User {
	id: number;
	name: string;
	lastName: string;
	agency: string;
	position: string;
	email: string;
	phone: string;
	file: string;
	role: Role;
}

export interface ApiUser extends Omit<User, "role"> {
	password: string;
	createdAt: string;
	updatedAt: string;
	role: Role;
}

export interface ApiResponse {
	success: boolean;
	message: string;
	status: number;
	data: ApiUser[];
}

export const transformUserData = (data: ApiUser[]): User[] => {
	return data.map((user) => ({
		...user,
		role: user.role,
	}));
};
