
const ItemListContainer=({greeting})=> {

    return (
      <>      
        <h1>{greeting}</h1>   
        <div>
        <h2  style={{
          color:"#3097db",
          fontFamily: 'IBM Plex Mono', 
          fontWeight: "500",
          marginTop: 20,
          textAlign: "left",
      }}>Groso</h2>
        <p style={{
           fontFamily: 'IBM Plex Mono',
           fontStyle: "italic",
           textAlign: "left",
      }}><strong>[ Lunfardo, Argentino ]</strong>Adjetivo. Se refiere a algo o alguien excepcional, admirable, impresionante o sorprendente. También se puede utilizar para destacar las habilidades, logros o conocimientos sobresalientes de alguien. Aplicable a casi cualquier ámbito.
        </p>
        <p style={{
          fontFamily: 'IBM Plex Mono', 
          fontStyle: "italic",
          textAlign: "left",
      }}>
        Generalmente esta palabra se la usa acompañada por el prefijo "re".<strong>"Es re groso" </strong></p> 
        </div>
               
      </>
    )
  }
  
  export default ItemListContainer