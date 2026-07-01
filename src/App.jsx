export default function Portfolio() {
  const projects = [
    {
      title: "Sistema de Gestión",
      description: "Aplicación web desarrollada con React y API REST.",
      tech: "React, Node.js, PostgreSQL",
      link: "#",
    },
    {
      title: "Dashboard Analítico",
      description: "Panel interactivo con métricas y visualizaciones.",
      tech: "React, Chart.js",
      link: "#",
    },
    {
      title: "E-commerce",
      description: "Tienda online con carrito de compras.",
      tech: "React, Firebase",
      link: "#",
    },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
      
  
      <img
        src="/perfil.jpeg"
        alt="Carlos Galeano"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #2563eb",
        }}
      />

      <h1>Carlos Galeano S.</h1>
      <p>Programador especializado en desarrollo web moderno.</p>

      <h2>Sobre mí</h2>
      <p>
        Desarrollador enfocado en React, JavaScript, TypeScript y creación de
        aplicaciones web escalables.
      </p>

      <h2>Proyectos</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "16px",
            borderRadius: "10px",
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <strong>{project.tech}</strong>
        </div>
      ))}

      <h2>Contacto</h2>
      <p>Email: tu-correo@ejemplo.com</p>
      <p>GitHub: github.com/tuusuario</p>
    </div>
  );
}