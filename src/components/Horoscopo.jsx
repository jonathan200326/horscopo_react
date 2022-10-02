import React from "react";
import { useState } from 'react';

import "./horoscopo.css";


const Horoscopo = (value) => {
  const [horoscopo, setHoroscopo] = useState(value);
  const [img, setImg] = useState(value);
  const [descripcion, setDescripcion] = useState(value);
  const [fechas, setFechas] = useState(value);

    const mostrar = (e) =>{
      const dia = e.target.value.substring(8)
      const mes = e.target.value.substring(5,7)
      document.getElementById("CardH").style.display="block";

      if ( dia >=21 && mes == 3 ||  dia <=20 && mes == 4 ){
        
        setHoroscopo("Aries");
        setImg("https://previews.123rf.com/images/rawpixel/rawpixel1901/rawpixel190100900/115280296-s%C3%ADmbolo-del-hor%C3%B3scopo-dibujado-a-mano-de-la-ilustraci%C3%B3n-de-aries.jpg?fj=1")
        setDescripcion("Deje ir los conflictos definitivamente, hoy es Buendía para comenzar a transitar un camino de paz en la pareja y de amor con todos. En el trabajo pueden presentarse nuevas propuestas o ideas, no se acobarde y pruebe sin apostar todo.")
        setFechas("21 de Marzo al 20 de Abril")
      }else if (dia >=21 && mes == 4 ||  dia <=20 && mes == 5){
        setHoroscopo("Tauro");
        setFechas("21 de Abril al 20 de Mayo");
        setDescripcion("Gran oportunidad financiera, podrá incrementar sus bienes si actúa con la mente bien clara en sus objetivos reales. Comenzar otra actividad deportiva, alguna que nunca haya practicado puede redundar en grandes satisfacciones.");
        setImg("https://previews.123rf.com/images/rawpixel/rawpixel1902/rawpixel190202731/116618854-s%C3%ADmbolo-del-hor%C3%B3scopo-dibujado-a-mano-de-la-ilustraci%C3%B3n-de-tauro.jpg?fj=1");
      
      }else if (dia >=21 && mes == 5 ||  dia <=20 && mes == 6){
        setHoroscopo("Geminis");
        setFechas("21 de Mayo al 20 de Junio");
        setDescripcion("Los negocios turbios serán opciones de las que tendrá que apartarse, hoy es un día de tentaciones y tendrá que poner todo su empeño para pasar de ellas. Su mente subconsciente sabe, se estimula y se presenta ante Ud. en la forma de intuiciones, que puede elegir seguir o no");
        setImg("https://previews.123rf.com/images/shikshik/shikshik1606/shikshik160600013/58047150-dibujado-a-mano-hermoso-del-arte-l%C3%ADnea-rom%C3%A1ntica-de-los-g%C3%A9minis-del-zodiaco-aislado-ilustraci%C3%B3n-vect.jpg?fj=1");
       }else{
        setHoroscopo("No disponible");
        setFechas("N/A")
        setDescripcion("");
        setImg("https://previews.123rf.com/images/studio3321/studio33211603/studio3321160300001/55012543-la-rueda-del-zodiaco-de-los-signos-del-zod%C3%ADaco-con-el-s%C3%ADmbolo.jpg?fj=1");
      }
    }
    return (
      <>
      <div id="container">
        <form>
          
          <h2 id="h2">Fecha de Nacimiento: </h2>
          <input type="date" id="fecha" name="fecha" onChange={mostrar}></input>
         
        </form>
        <div className="card" id="CardH" style={{ display : "none" }}>
            <div className="row">
            <h3 id="img">{horoscopo.toString()}</h3>

            <img src ={img.toString()} alt="lang.svg" width={175} height="175px"/>
            <h2>Descripcion</h2>
            <p id="t">{descripcion.toString()}</p>
            </div>
            
            <div class="container" >
                <h5 id="s">{fechas.toString()}</h5> 
                 
            </div>
            
        </div>
        </div>
      </>
      
        
    );
}
export default Horoscopo