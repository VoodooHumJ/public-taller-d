function DashboardEstudiante() {
  return (
    <div className="dashboard-estudiante">
      <h1>Dashboard Estudiante</h1>
      <div className="dashboard-content">
        <div className="widget">
          <h2>Mis Materias</h2>
          {/* Lista de materias inscritas */}
        </div>
        <div className="widget">
          <h2>Tareas Pendientes</h2>
          {/* Lista de tareas */}
        </div>
        <div className="widget">
          <h2>Calificaciones</h2>
          {/* Tabla de calificaciones */}
        </div>
      </div>
    </div>
  );
} 