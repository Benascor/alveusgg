import type { UserRole } from "./user-roles";

export type PermissionConfig = {
  requiredRole?: UserRole;
  requiresSuperUser?: boolean;
};

export const permissions = {
  viewDashboard: {
    requiredRole: "dashboard",
  },
  viewActivityFeed: {
    requiresSuperUser: true,
  },
  manageShowAndTell: {
    requiredRole: "showAndTell",
  },
  manageGiveaways: {
    requiredRole: "giveaways",
  },
  manageTwitchApi: {
    requiresSuperUser: true,
  },
  manageUsersAndRoles: {
    requiresSuperUser: true,
  },
  manageNotifications: {
    requiredRole: "notifications",
  },
  manageExtensionStatus: {
    requiredRole: "extensionStatus",
  },
} as const satisfies Record<string, PermissionConfig>;

export function checkRolesGivePermission(
  roles: string[],
  permissionConfig: PermissionConfig
) {
  return permissionConfig.requiredRole
    ? roles.includes(permissionConfig.requiredRole)
    : false;
}
