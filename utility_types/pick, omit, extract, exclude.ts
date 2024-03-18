type User1 = {
  id: number;
  name: string;
  userName?: string;
};

type OmitUserUsername = Omit<User1, 'userName'>;
type PickId = Pick<User1, 'id'>;

type Role = 'admin' | 'user' | 'manager';
type NoUserRole = Exclude<Role, 'user'>;

type RoleAttributes =
  | {
      role: 'admin';
      permission: 'all';
    }
  | {
      role: 'user';
    }
  | {
      role: 'manager';
    };

type AdminRole = Extract<RoleAttributes, { role: 'admin' }>;
