export const ROLES = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    USER: 'user',
    GUEST: 'guest',
};
export const PERMISSIONS = {
    VIEW_DASHBOARD: 'view_dashboard',
    VIEW_PRODUCTS: 'view_products',
    EDIT_PRODUCT: 'edit_product',
    DELETE_PRODUCT: 'delete_product',
};

export const ROLE_PERMISSIONS: Record<string, string[]> = {
    [ROLES.ADMIN]: [
        PERMISSIONS.VIEW_DASHBOARD,
        PERMISSIONS.VIEW_PRODUCTS,
        PERMISSIONS.EDIT_PRODUCT,
        PERMISSIONS.DELETE_PRODUCT,
    ],
    [ROLES.MANAGER]: [
        PERMISSIONS.VIEW_DASHBOARD,
        PERMISSIONS.VIEW_PRODUCTS,
        PERMISSIONS.EDIT_PRODUCT,
    ],
    [ROLES.USER]: [
        PERMISSIONS.VIEW_DASHBOARD,
        PERMISSIONS.VIEW_PRODUCTS,
    ],
    [ROLES.GUEST]: [PERMISSIONS.VIEW_DASHBOARD],
};