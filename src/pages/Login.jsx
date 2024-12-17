import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Fetch del archivo emails.json
      const response = await fetch('/emails.json');
      const data = await response.json();
      
      // Buscar el usuario por email
      const user = data.users.find(user => user.email === email);
      
      if (user) {
        // Redirigir según el rol
        if (user.role === 'docente') {
          navigate('/dashboard-docente');
        } else {
          navigate('/dashboard-estudiante');
        }
      } else {
        alert('Email no autorizado');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login; 