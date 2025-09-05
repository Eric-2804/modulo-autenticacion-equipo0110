<template>
  <div class="principal">
    <!-- menú lateral -->
    <div class="actividad">
      <div class="perfilimg">
        <img src="./assets/perfil.png" alt="perfil" />
      </div>

      <div class="nombre">
        <h4>✰ David Santiago</h4>
      </div>

      <div class="buscador">
        <input
          type="text"
          v-model="textoBusqueda"
          placeholder="buscar..."
        />
        <button @click="buscar">🔍</button>
      </div>

      <div v-if="textoBusqueda">
        <p>estás buscando: {{ textoBusqueda }}</p>
      </div>

      <!-- menú lateral -->
      <div class="menu-item">
        <img src="./assets/item/profile.png" alt="">
        <span>profile</span>
      </div>
      <div class="menu-item">
        <img src="./assets/item/job.png" alt="">
        <span>job</span>
      </div>
      <div class="menu-item">
        <img src="./assets/item/salary details.png" alt="">
        <span>salary details</span>
      </div>
      <div class="menu-item">
        <img src="./assets/item/time off.png" alt="">
        <span>time off</span>
      </div>
      <div class="menu-item">
        <img src="./assets/item/documents.png" alt="">
        <span>documents</span>
      </div>
      <div class="menu-item">
        <img src="./assets/item/training.png" alt="">
        <span>training</span>
      </div>
      <div class="menu-item">
        <img src="./assets/item/benefits.png" alt="">
        <span>benefits</span>
      </div>
    </div>

  
    <div class="contenido">
      <div class="contenido-header">
        <div class="contenido1">
          <h2>PROFILE</h2>
        </div>
        <div class="contenido2">
          <span class="fecha">july 24, 2020, 4:30 pm</span>
          <img src="./assets/header/mensaje.png" alt="icono1" />
          <img src="./assets/header/campana.png" alt="icono2" />
          <img src="./assets/header/ajustes.png" alt="icono3" />
          <img src="./assets/header/exit.png" alt="icono4" />
        </div>
      </div>

      
      <div class="contenidoP">
        <div class="card">
          <div class="card-info">
            <img src="./assets/perfil.png" class="perfil-foto" />
            <div class="datos">
              <h3>David Santiago <span class="status">Activo</span></h3>
              <p><strong>Rol:</strong> User</p>
              <p><strong>Posición:</strong> Head of HR Department</p>
              <p><strong>Email:</strong> helenvoizhicki@gmail.com</p>
              <p><strong>Tel:</strong> +57 123 456 789</p>
              <p><strong>Compañía:</strong> Lorensipsum Group</p>
              <div class="redes">
                <img src="./assets/card1/in.png" class="apli" />
                <img src="./assets/card1/face.png" class="apli" />
                <img src="./assets/card1/telegram.png" class="apli" />
              </div>
            </div>
          </div>
        </div>
      
  <div class="card2">
  <div class="calendario">
  <VCalendar is-expanded :attributes="attributes" />
</div>
</div>




<div class="card card3">
  <div class="card3-header">
    <h3>Upcoming Events</h3>
    <button class="btn-ver">View All</button>
  </div>
  <span class="fecha2">July 24, 2020, 4:30 pm</span>

  
  <div class="evento">
    <div class="eventoinfo">
      <h4>Design review</h4>
      <p>9:00 AM – 10:00 AM</p>
    </div>
    <div class="eventousers">
      <img src="./assets/user1.png" alt="user" />
      <img src="./assets/user2.png" alt="user" />
      <img src="./assets/user3.png" alt="user" />
    </div>
  </div>


  <div class="evento">
    <div class="eventoinfo">
      <h4>Planning meeting</h4>
      <p>2:00 PM – 3:30 PM</p>
    </div>
    <div class="eventousers">
      <img src="./assets/user2.png" alt="user" />
      <img src="./assets/user3.png" alt="user" />
    </div>
  </div>
</div>
</div>

<div class="fila-final">
  <div class="card card4">
    <h3>basic information</h3>
    <p>aquí iría el contenido...</p>
  </div>

  <div class="card card5">
    <h3>onboarding</h3>
    <p>aquí iría el contenido...</p>
  </div>
</div>

     
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const textoBusqueda = ref('')

const buscar = () => {
  console.log('buscando:', textoBusqueda.value)
}

const attributes = [
  {
    key: 'evento1',
    highlight: { color: 'blue', fillMode: 'solid' },
    dates: new Date(2025, 8, 5),
    popover: { label: 'Revisión de diseño' }
  },
  {
    key: 'evento2',
    highlight: { color: 'red', fillMode: 'light' },
    dates: new Date(2025, 8, 12),
    popover: { label: 'Reunión con equipo' }
  }
]
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #0564B4,#68BDEB, #23578A);
}

.principal {
  background-color: white;
  width: 90%;           
  min-height: 90vh;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;    
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.795);
}


.actividad {
  width: 220px;
  background: linear-gradient(to bottom, #0564B4, #68BDEB);
  color: white;
  text-align: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 30px 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.795);
}

.perfilimg img {
  max-width: 90px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.795);
}

.nombre h4 {
  margin: 10px 0;
}

.buscador {
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
}

.buscador input {
  width: 110px;        
  height: 10px;       
  padding: 10px;   
  border: none;
  border-radius: 8px;
  font-size: 14px;
  background: linear-gradient(to bottom, #0564B4, #68BDEB);
  color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.795);
  margin-bottom: 20px;
}

.buscador button {
  width: 50px;        
  height: 30px;       
  background: linear-gradient(to bottom, #0564B4, #68BDEB);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.795);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
}

.menu-item {
  display: flex;
  align-items: center;   
  gap: 10px;             
  margin: 12px 0;
  cursor: pointer;
}

.menu-item img {
  width: 20px;
  height: 20px;
}

.menu-item span {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}


.contenido {
  flex: 1; 
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  background: #fff;
}


.contenido-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:white;
  padding: 10px 20px;
  border-top-right-radius: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.contenido1 h2 {
  margin: 0;
  font-size: 18px;
  color: #222;
}

.contenido2 {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contenido2 .fecha {
  font-size: 12px;
  color: #555;
}

.contenido2 img {
  width: 18px;
  height: 18px;
  cursor: pointer;
}



.contenidoP {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  padding: 20px;
}

.card {
  background: #f9fbff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  color: #000000;
  width: 350px; ;
  height: 225px;
}


.card-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.perfil-foto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.datos {
  flex: 1;
  font-size: 12px;
  text-align: left;
}

.status {
  
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background: linear-gradient(to bottom, #0564B4, #68BDEB);
  margin-left: 5px;

}

.redes {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  margin-left: 30px;
}

.apli {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.card2 {
  background: #f9fbff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;   
  justify-content: center;
  height: 235px;   
  width: 305px;    
}
.calendario {
  width: 280px;        
  height: 350px;      
  overflow-y: auto;    
  margin: 0 auto; 
  margin-left: 10%;  
  
}

.card3 {
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  background: #f9fbff;
  height: 235px;
  width:305px;
}

.card3-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card3-header h3 {
  margin: 0;
  font-size: 16px;
  color: #222;
}

.btn-ver {
  background: orange;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
}

.fecha2 {
  font-size: 12px;
  color: #555;
  display: block;
  margin: 6px 0 12px 0;
}


.evento {
  background: #142850; 
  color: #fff;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.eventoinfo h4 {
  margin: 0;
  font-size: 14px;
}

.eventoinfo p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #ddd;
}


.eventousers {
  display: flex;
  gap: -8px;
}

.eventousers img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -8px; 
}

.fila-final {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 20px; 
  margin-top: 20px;
  width: 100%;
}

.card4 {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  margin-left: 20px;
  width: 500px;
}

.card5 {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  width: 500px;
}
</style>
