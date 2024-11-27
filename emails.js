const allowedEmails = {
    // Administradores (acceso total)
    "pulsocreativo.bo@gmail.com": {
        role: "admin",
        name: "Administrador",
        permissions: ["read", "write", "delete", "manage_users"]
    },
    
    // Profesores (acceso medio)
    "cvicarvajal@umsa.bo": {
        role: "teacher",
        name: "Docente",
        permissions: ["read", "write"]
    },
    
    // Estudiantes (acceso básico)
    "h.chavez.co21@gmail.com": {
        role: "student",
        name: "Estudiante",
        permissions: ["read"]
    }
};

// Función para verificar el rol
function checkUserRole(email) {
    const user = allowedEmails[email];
    if (!user) return null;
    return user.role;
}

// Función para verificar permisos
function hasPermission(email, permission) {
    const user = allowedEmails[email];
    if (!user) return false;
    return user.permissions.includes(permission);
}

// Exportar las funciones
export { allowedEmails, checkUserRole, hasPermission }; 