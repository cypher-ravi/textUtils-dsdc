export default function AboutUs(props) {
    

  return (
    <div>
     <div class="card mb-3" style={{backgroundColor:props.mode === 'dark'?'black':'white',color:props.mode === 'dark'?'white':'black',borderColor:props.mode === 'dark'?'white':'black'}}>
  <div class="card-body">
    <h5 class="card-title">About Us</h5>
    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sunt, quidem earum sapiente iure soluta ab ad repellendus reprehenderit voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi perferendis maxime harum alias facilis voluptates illum? Provident quas iusto incidunt voluptatum quos quibusdam eaque dolorem nostrum consequuntur omnis. Dolores!.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>



  </div>
</div>
    </div>
  )
}
