import React from 'react'

export default function Github(props) {
  return (
    <div>
   
  <div className="container" style={{backgoundColor:props.mode === 'dark'?'black':'white',color:props.mode === 'dark'?'white':'black'}}>
    <h1>Contibute to Text Utils</h1>      
    <p>Looking for a powerful and user-friendly text utility website? Look no further than our Github repo! Our innovative platform offers a range of cutting-edge tools to help you streamline your writing process, from grammar and spelling checkers to word count and character count features. With our intuitive interface and customizable settings, you can easily tailor the site to your specific needs and preferences. Whether you're a writer, student, or business professional, our text utility website has everything you need to produce high-quality written content quickly and efficiently. Don't wait – join our Github community today and take your writing to the next level!</p>
    {/* <h3><span class="badge text-bg-primary"><a style={{color:'white',textDecoration:'none',cursor:'pointer'}} target='_blank' href="https://github.com/cypher-ravi/textUtils-dsdc">https://github.com/cypher-ravi/textUtils-dsdc</a></span></h3> */}
  </div>
</div>
  )
}
